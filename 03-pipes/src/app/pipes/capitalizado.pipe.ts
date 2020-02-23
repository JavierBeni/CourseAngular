import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalizado' })

export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, todas: boolean = true): string {

        value = value.toLowerCase();
        let nombres = value.split(" ");
        if (todas) {
            for (let key in nombres) {
                nombres[key] = nombres[key][0].toUpperCase() + nombres[key].substr(1);
            }
        }else{
            nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
        }

        return nombres.join(" ");
    }
}