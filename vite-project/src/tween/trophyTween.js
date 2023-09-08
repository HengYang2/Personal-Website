import * as TWEEN from '@tweenjs/tween.js'
import { degToRad } from 'three/src/math/MathUtils';

export default function trophyTween(project) {

    //Debouncer: If book is still in animation and hieght is above 2.11, then dont run bookTweenUp.start() again.
    if (project.rotation.y == degToRad(90)) {

        const trophyTween90deg1 = new TWEEN.Tween({ rotationY: project.rotation.y })
            .to({ rotationY: project.rotation.y + degToRad(90) }, 1000)
            .onUpdate((coords) => {
                project.rotation.y = coords.rotationY

            })
            .easing(TWEEN.Easing.Linear.None)
            .repeat(0)
            .delay(0);

        const trophyTween90deg2 = new TWEEN.Tween({ rotationY: project.rotation.y + degToRad(90) })
            .to({ rotationY: project.rotation.y + degToRad(180) }, 1000)
            .onUpdate((coords) => {
                project.rotation.y = coords.rotationY

            })
            .easing(TWEEN.Easing.Linear.None)
            .repeat(0)
            .delay(0);


        const trophyTween90deg3 = new TWEEN.Tween({ rotationY: project.rotation.y + degToRad(180) })
            .to({ rotationY: project.rotation.y + degToRad(270) }, 1000)
            .onUpdate((coords) => {
                project.rotation.y = coords.rotationY

            })
            .easing(TWEEN.Easing.Linear.None)
            .repeat(0)
            .delay(0);

        const trophyTween90deg4 = new TWEEN.Tween({ rotationY: project.rotation.y + degToRad(270) })
            .to({ rotationY: project.rotation.y + degToRad(360) }, 1000)
            .onUpdate((coords) => {
                project.rotation.y = coords.rotationY

            })
            .easing(TWEEN.Easing.Linear.None)
            .repeat(0)
            .delay(0);


        trophyTween90deg1.chain(trophyTween90deg2);
        trophyTween90deg2.chain(trophyTween90deg3);
        trophyTween90deg3.chain(trophyTween90deg4);
        trophyTween90deg4.onComplete(() => {project.rotation.y = degToRad(90);})

        trophyTween90deg1.start();

    } else {
        // project.rotation.y = 0;
        return
    }
}



