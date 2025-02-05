import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartList:[],
        totalQuantity:0,
    },
    reducers:{
        addToCart(state,action){
            const newitem=action.payload;
            //to check if the item is already exist
            const existingItem=state.cartList.find(item=>item.id === newitem.id);
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice+=newitem.itemPrice;
            }else{
                state.cartList.push({
                    id:newitem.id,
                    itemPrice:newitem.itemPrice,
                    quantity:1,
                    totalPrice:newitem.itemPrice,
                    itemName:newitem.itemName,
                    itemNameGerman:newitem.itemNameGerman,
                    itemNameSpanish:newitem.itemNameSpanish,
                    itemNameArabic:newitem.itemNameArabic,
                    itemNameFrench:newitem.itemNameFrench,
                    itemTypeName:newitem.itemTypeName,
                    itemTypeNameGerman:newitem.itemTypeNameGerman,
                    itemTypeNameSpanish:newitem.itemTypeNameSpanish,
                    itemTypeNameArabic:newitem.itemTypeNameArabic,
                    itemTypeNameFrench:newitem.itemTypeNameFrench,
                    itemType:newitem.itemType,
                    itemTypeGerman:newitem.itemTypeGerman,
                    itemTypeSpanish:newitem.itemTypeSpanish,
                    itemTypeFrench:newitem.itemTypeFrench,
                    itemTypeArabic:newitem.itemTypeArabic,
                    colors:newitem.colors,
                    itemIamge:newitem.itemIamge
                })
                state.totalQuantity++;
            }
        },
        removeFromCart(state,action){
            let id=action.payload;

            const existingItem=state.cartList.find(item=>item.id === id);
            if(existingItem.quantity ===1){
                state.cartList=state.cartList.filter(item=>item.id !== id);
                state.totalQuantity--;
            }else{
                existingItem.quantity--;
                existingItem.totalPrice-=existingItem.price
            }
        },deleteProductFromCart(state,action){
            let id=action.payload;
            const existingItem=state.cartList.find(item=>item.id === id);
            if(existingItem.quantity >= 1 ){
                state.cartList=state.cartList.filter(item=>item.id !== id);
                state.totalQuantity--;
            }
        },deleteAllProducts(state,action){
            state.cartList=[];
        }
    }
})



export const cartActions=cartSlice.actions;

export default cartSlice;