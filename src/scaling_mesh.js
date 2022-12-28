// Масштабирование сетки
export default class ScalingMesh {
    scale(points) {
// Находим сдвиг по X,Y
        let shiftX = 0;
        let shiftY = 0;
        points.forEach(elementArr => {
            if (elementArr[0] < 0) {
                shiftX += elementArr[0]
            }
            if (elementArr[1] < 0) {
                shiftY += elementArr[1]
            }
        })
        // Сдвигаем
        const arr = points.map(elementArr => {
            if (shiftX < 0) {
                elementArr[0] -= shiftX;
            }
            if (shiftY < 0) {
                elementArr[1] -= shiftY;
            }
            return [elementArr[0], elementArr[1]]
        })
        // Находим максимальные X,Y
        let maxX = 0;
        let maxY = 0;
        arr.forEach(elementArr => {
            if (elementArr[0] > maxX) {
                maxX = elementArr[0]
            }
            if (elementArr[1] > maxY) {
                maxY = elementArr[1]
            }
        })
        // Делим на maxX и maxY
        const newArr = arr.map(elementArr => {
            elementArr[0] /= maxX;
            elementArr[1] /= maxY;
            return [+elementArr[0].toFixed(3), +elementArr[1].toFixed(3)]
        })

        // Подгоняем данные под размеры канваса
        return newArr.map(elementArr => {
            elementArr[0] *= 640;
            elementArr[1] *= 480;
            return [Math.ceil(elementArr[0]), Math.ceil(elementArr[1])]
        });
    }
}
