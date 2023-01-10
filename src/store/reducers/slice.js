import {createSlice} from "@reduxjs/toolkit";
const example = "[[684,131],[705,111],[703,134],[720,112],[714,147],[737,171],[749,212],[784,267],[769,297],[741,302],[725,271],[692,249],[678,248],[657,237],[635,298],[635,319],[620,345],[616,410],[608,448],[588,474],[578,513],[566,547],[560,584],[548,616],[545,657],[547,694],[579,718],[579,730],[547,731],[542,725],[542,715],[534,706],[524,606],[513,633],[513,687],[521,705],[533,715],[536,725],[501,727],[498,706],[490,699],[493,626],[500,576],[500,485],[496,478],[360,474],[307,456],[263,434],[234,481],[214,548],[212,619],[228,664],[228,675],[256,701],[261,712],[255,717],[229,715],[223,711],[214,685],[201,677],[195,626],[185,578],[172,559],[171,531],[177,513],[141,545],[111,594],[107,635],[106,678],[126,700],[140,722],[139,728],[120,732],[96,721],[96,699],[79,690],[80,676],[90,641],[90,546],[124,499],[127,460],[111,411],[102,368],[107,335],[120,308],[118,301],[111,301],[97,330],[92,460],[89,514],[79,562],[70,592],[63,601],[62,581],[58,609],[48,605],[44,582],[39,596],[38,562],[34,577],[26,563],[25,542],[24,390],[33,351],[38,329],[39,318],[60,295],[89,280],[126,276],[145,273],[181,264],[271,264],[329,280],[398,282],[482,265],[532,214],[576,167],[624,141],[666,133]]"

const initialState = {
    exampleFigure: example,
    meshQualityState: {
        text: "",
        percent: 0,
    },
    arrayForMesh: [],

}
export const inputSlice = createSlice({
    name: 'inputArray',
    initialState,
    reducers: {
        setArrayForFigure(state, action) {
            state.exampleFigure = action.payload;
        },
        setMeshQualityForFigure(state, action) {
            state.meshQualityState.text = action.payload[0];
            state.meshQualityState.percent = action.payload[1]
        },
        setArrayForMesh(state, action) {
            state.arrayForMesh = action.payload;
        },
    }
})

export default inputSlice.reducer;