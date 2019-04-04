export const genreatorArr = (cell:any, count:number) => {
    return (new Array(count)).fill(cell)
}

export const toArray = (() =>
  Array.from ? Array.from : (obj: any) => [].slice.call(obj)
)();