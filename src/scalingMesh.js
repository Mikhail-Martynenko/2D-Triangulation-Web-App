export default class ScalingMesh {
    scale(points) {
        const shiftedPoints = this.shiftPointsToPositive(points);
        const normalizedPoints = this.normalizePoints(shiftedPoints);

        return this.scaleToCanvas(normalizedPoints);
    }

    shiftPointsToPositive(points) {
        let shiftX = 0;
        let shiftY = 0;

        const shiftedPoints = points.map(([x, y]) => {
            if (x < 0) {
                shiftX += x;
            }
            if (y < 0) {
                shiftY += y;
            }
            return [x, y];
        });

        if (shiftX < 0 || shiftY < 0) {
            return shiftedPoints.map(([x, y]) => [x - shiftX, y - shiftY]);
        }

        return shiftedPoints;
    }

    normalizePoints(points) {
        const [maxX, maxY] = points.reduce(([maxX, maxY], [x, y]) => [Math.max(maxX, x), Math.max(maxY, y)], [0, 0]);

        return points.map(([x, y]) => [x / maxX, y / maxY]);
    }

    scaleToCanvas(points) {
        const scaledPoints = points.map(([x, y]) => [x * 640, y * 480]);

        return scaledPoints.map(([x, y]) => [Math.ceil(x), Math.ceil(y)]);
    }
}
