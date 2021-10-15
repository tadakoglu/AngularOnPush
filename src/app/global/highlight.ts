export default function highlight(el: any) {
    (el.nativeElement as HTMLElement).style.backgroundColor = 'yellow'
    setTimeout(() => {
        (el.nativeElement as HTMLElement).style.backgroundColor = ''
    }, 500);
}

