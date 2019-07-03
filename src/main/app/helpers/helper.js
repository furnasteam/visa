export const xlp = {
    isSelected(arr ,key){
        return arr && key && arr.find((el)=>{
            if(el.name == key)
                return el.selected;
        });
     }
};
