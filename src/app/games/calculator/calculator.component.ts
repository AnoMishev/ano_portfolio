import { Component, ElementRef, HostListener, inject, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  public input = new FormControl('')  // Контролер за внес на текст (функционалност на текстуален внес)
  public result: string | undefined; // Резултат од пресметката
  private _elementRef = inject(ElementRef)
  private _renderer = inject(Renderer2)
  @ViewChildren('colored') coloredElement!: QueryList<ElementRef>

  // Функција која се повикува кога ќе се притисне број
  public pressNum(num: string) {
    // Обработка на внес на децимален знак
    if (num === '.') {
      // Проверува дали последниот карактер е оператор или ако влезот е празен
      if (this.isLastCharOperator() || this.input.value === '') {
        this.input.setValue(this.input.value + '0.');
        return;
      }
      
      // Добиј го последниот операнд
      const lastOperand = this.getLastOperand();
      if (lastOperand.includes('.')) {
        return; // Не додавај друг децимален знак ако веќе постои во последниот операнд
      }
      
      // Додај го децималниот знак на влезот
      this.input.setValue(this.input.value + num);
      return;
    }
  
    // Обработка на внес на број
    if (num === '0' && this.input.value === '') {
      console.log('testiram')
      return; // Превенирање водечки нули
    }
    
    // Додај ја бројката на влезот
    this.input.setValue(this.input.value + num);
  }

  // Функција која се повикува кога ќе се притисне оператор
  public pressOperator(op: string) {
    if (this.isLastCharOperator()) {
      return; // Ако последниот карактер е оператор, не додавај нов оператор
    }

    // Додај го операторот на влезот
    this.input.setValue(this.input.value + op);
  }

  // Функција за брисање на последниот карактер
  public clear() {
    const currentValue = this.input.value;
    if (currentValue !== "") {
      if (currentValue)
        this.input.setValue(currentValue.slice(0, -1)) // Избриши го последниот карактер
    }
  }

  // Функција за целосно чистење на внесот и резултатот
  public allClear() {
    this.input.setValue(''); // Празни го внесот
    this.result = ""; // Празни го резултатот
  }

  // Функција која проверува дали последниот карактер е оператор
  private isLastCharOperator(): boolean {
    const value = this.input.value || '';
    return ['/', '*', '-', '+'].includes(value[value.length - 1] || '');
  }
  
  // Функција која добива последниот операнд од внесот ПРОВЕРУВА ДАЛИ БРОЈОТ ИМА . АКО ИМА НЕ МОЖЕ ДА ДОДАДЕ! А, АКО НЕМА ОПЕРАТОР ЌЕ ГО ПРОВЕРИ 
 // ЦЕЛИОТ БРОЈ ПРИМЕР 55 ЌЕ ПРОВЕРИ ДАЛИ ИМА . ИЛИ 55+2 НА 2 ЌЕ ПРОВЕРИ ДАЛИ ИМА . ИТН.
  private getLastOperand(): string {
    const value = this.input.value || '';
    const operators = ['/', '*', '-', '+'];
    
    let lastOperatorPos = -1;
    for (let i = value.length - 1; i >= 0; i--) {
      if (operators.includes(value[i])) {
        lastOperatorPos = i;
        break;
      }
    }
  
    return lastOperatorPos === -1 ? value : value.substring(lastOperatorPos + 1);
  }

  // Функција која ја пресметува и покажува конечната вредност
  public getAnswer() {
    let formula = this.input.value || "";

    const lastChar = formula[formula.length - 1]
    if (['/', '*', '-', '+', '.'].includes(lastChar)) {
      formula = formula.slice(0, -1) // Ако последниот карактер е оператор или децимален знак, отстрани го
    }

    try {
      this.result = eval(formula).toString();
      this.updateSquareColors(); // Пресметај ја вредноста и претвори ја во текст
    }
    catch(e) {
      console.log('Im sorry, there is an error', e)
      this.result = 'Error, try again' // Покажи порака за грешка ако има проблем со пресметката
      this.updateSquareColors();
    }

    

  }

  private getRandomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  updateSquareColors(): void {
    this.coloredElement.forEach((element, index) => {
        const color = this.getRandomColor();
        this._renderer.setStyle(element.nativeElement, 'border-color', color);
    })
  }

  handleKeyPress(key: string): void {
    if (!isNaN(Number(key))) {
      this.pressNum(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
      this.pressOperator(key);
    } else if (key === 'Enter') {
      this.getAnswer();
    } else if (key === 'Backspace') {
      const currentValue = this.input.value;
      if (currentValue) {
      this.input.setValue(currentValue.slice(0, -1));
      }
    } else if (key === 'Escape') {
      this.allClear();
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    this.handleKeyPress(event.key);
  }

}
