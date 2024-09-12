import { Injectable, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class CalculatorService {

      // Функција која проверува дали последниот карактер е оператор
    public isLastCharOperator(input: string): boolean {
        const value = input;
        return ['/', '*', '-', '+'].includes(value[value.length - 1] || '');
      }

      // Функција која добива последниот операнд од внесот ПРОВЕРУВА ДАЛИ БРОЈОТ ИМА . АКО ИМА НЕ МОЖЕ ДА ДОДАДЕ! А, АКО НЕМА ОПЕРАТОР ЌЕ ГО ПРОВЕРИ 
      // ЦЕЛИОТ БРОЈ ПРИМЕР 55 ЌЕ ПРОВЕРИ ДАЛИ ИМА . ИЛИ 55+2 НА 2 ЌЕ ПРОВЕРИ ДАЛИ ИМА . ИТН.
    public getLastOperand(input: string): string {
        const value = input;
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


    public getRandomColor(): string {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
      }


    
}