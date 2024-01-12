export default class MeshQuality {
    renderStatistics(points) {
        let str = '';
        let percent = 0;

        function calcLengthSidesTriangles(arrCoordinatesVerticesTriangle) {

            let a, b, c;
            // Создаём новый массив с результатами вычислений длин сторон по координатам его вершин
            let arrLengthSidesTriangles = arrCoordinatesVerticesTriangle.map((elementArr) => {
                a = Math.round(Math.abs(Math.sqrt(Math.pow((elementArr[2] - elementArr[0]), 2) + Math.pow((elementArr[3] - elementArr[1]), 2))));
                b = Math.round(Math.abs(Math.sqrt(Math.pow((elementArr[4] - elementArr[0]), 2) + Math.pow((elementArr[5] - elementArr[1]), 2))));
                c = Math.round(Math.abs(Math.sqrt(Math.pow((elementArr[4] - elementArr[2]), 2) + Math.pow((elementArr[5] - elementArr[3]), 2))));

                return [a, b, c];
            })
            calсQualityMesh(arrLengthSidesTriangles)
        }

        function calсQualityMesh(arr) {
            const newArr = arr.map(elementArr =>
                Math.round(((Math.max.apply(null, elementArr) - Math.min.apply(null, elementArr)) / Math.max.apply(null, elementArr)) * 100)
            )
            const initialValue = 0;
            const sumElementsArr = newArr.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);

            let mean = sumElementsArr / newArr.length;
            percent = Math.round(mean);
            if (mean <= 100 && mean >= 90) {
                str = `Качество триангуляции отличное`;
            } else if (mean < 90 && mean >= 80) {
                str = `Качество триангуляции хорошее`;
            } else if (mean < 80 && mean >= 60) {
                str = `Качество триангуляции нормальное`;
            } else {
                str = `Качество триангуляции плохое`;
            }
        }

        calcLengthSidesTriangles(points)
        return [str, percent];
    }
}

