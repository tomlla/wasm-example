use std::collections::HashMap;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[test]
fn add_test() {
    assert_eq!(1 + 1, add(1, 1));
}

#[wasm_bindgen]
pub struct ComplexObj2 {
    pub num1: i32,
}

#[wasm_bindgen]
pub fn calc_score2(complex_obj: ComplexObj2) -> i32 {
    complex_obj.num1
}

/*
the trait bound `Vec<i32>: std::marker::Copy` is not satisfied
the trait `std::marker::Copy` is not implemented for `Vec<i32>`
 */
#[wasm_bindgen]
pub struct ComplexObj1 {
    #[wasm_bindgen(readonly)]
    pub entries: Vec<i32>,
}


#[wasm_bindgen]
pub fn read_ictx(x: ComplexObj1) {}

// /*
// the trait bound `Box<Vec<i32>>: IntoWasmAbi` is not satisfied
// the following implementations were found:
//   <Box<[JsValue]> as IntoWasmAbi>
//   <Box<[T]> as IntoWasmAbi>
//   <Box<[f32]> as IntoWasmAbi>
//   <Box<[f64]> as IntoWasmAbi>
// and 10 others
// */
// #[wasm_bindgen]
// pub struct ComplexObj3 {
//     pub entries: Box<Vec<i32>>,
// }

#[wasm_bindgen]
pub fn calc_score3(complex_obj: ComplexObj3) -> i32 {
    complex_obj.num1
}
