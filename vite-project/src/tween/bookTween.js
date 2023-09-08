import * as TWEEN from '@tweenjs/tween.js'

export default function bookTween(book) {

    //Debouncer: If book is still in animation and hieght is above 2.11, then dont run bookTweenUp.start() again.
    if (book.position.y > 2.81) {
        return
    }
    
    const bookTweenUp = new TWEEN.Tween({ x: book.position.x, y: book.position.y, z: book.position.z })
        .to({ x: book.position.x, y: book.position.y + 0.3, z: book.position.z }, 500)
        .onUpdate((coords) => {
            book.position.x = coords.x
            book.position.y = coords.y
            book.position.z = coords.z
        })
        .easing(TWEEN.Easing.Exponential.InOut)
        .repeat(0)
        .delay(100);

    const bookTweenDown = new TWEEN.Tween({ x: book.position.x, y: book.position.y + 0.3, z: book.position.z })
        .to({ x: book.position.x, y: book.position.y, z: book.position.z }, 500)
        .onUpdate((coords) => {
            book.position.x = coords.x
            book.position.y = coords.y
            book.position.z = coords.z
        })
        .easing(TWEEN.Easing.Exponential.InOut)
        .repeat(0)
        .delay(100);

    bookTweenUp.chain(bookTweenDown);
    bookTweenUp.start();

}



