import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textPreview'
})
export class TextPreviewPipe implements PipeTransform {

  transform(text: string, substringValue: number = 150): string {
    if (text.length > substringValue)
    return `${text.substring(0, substringValue)}...`;

    else
    return text;
  }

}
