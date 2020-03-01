let categorySelection = function() {
                addTawar();
                categories.addEventListener('click', function (event) {
                    if (event.target && event.target.innerHTML == '- Ящики для игрушек') {
                        item.remove();
                        if (catalogProduct[i].category == 'box') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.innerHTML == '- Стеллажи и полки для книг') {
                        item.remove();
                        if (catalogProduct[i].category == 'rack' || catalogProduct[i].category == 'bookshelf') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.innerHTML == '- Грифельные доски') {
                        item.remove();
                        if (catalogProduct[i].category == 'griffin' || catalogProduct[i].category == 'griffinM') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.innerHTML == '- Остальные товары и фурнитура') {
                        item.remove();
                        if (catalogProduct[i].category == 'rest') {
                            addTawar();
                        }
                    }
                    ///////////////////////////////////////////////////////////
                    if (event.target && event.target.value == 'b1') {
                        item.remove();
                        if (catalogProduct[i].box == 'modular') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'b2') {
                        item.remove();
                        if (catalogProduct[i].divisions == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'b3') {
                        item.remove();
                        if (catalogProduct[i].cap == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'b4') {
                        item.remove();
                        if (catalogProduct[i].rest == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'b5') {
                        item.remove();
                        if (catalogProduct[i].frame == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'b6') {
                        item.remove();
                        if (catalogProduct[i].frame == 'no') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'b7') {
                        item.remove();
                        if (catalogProduct[i].capGrif  == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'b8') {
                        item.remove();
                        if (catalogProduct[i].capModular  == 'yes') {
                            addTawar();
                        }
                    }
                    /////////////////////////////////////////////////
                    if (event.target && event.target.value == 'r1') {
                        item.remove();
                        if (catalogProduct[i].category == 'rack') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'r2') {
                        item.remove();
                        if (catalogProduct[i].category == 'bookshelf') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'r3') {
                        item.remove();
                        if (catalogProduct[i].open == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'r4') {
                        item.remove();
                        if (catalogProduct[i].sdel == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'r5') {
                        item.remove();
                        if (catalogProduct[i].clouse == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'r6') {
                        item.remove();
                        if (catalogProduct[i].floor == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'r7') {
                        item.remove();
                        if (catalogProduct[i].wall == 'yes') {
                            addTawar();
                        }
                    }
                    //////////////////////////////////////////////////////
                    if (event.target && event.target.value == 'g1') {
                        item.remove();
                        if (catalogProduct[i].category == 'griffinM') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'g2') {
                        item.remove();
                        if (catalogProduct[i].category == 'griffin') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'g3') {
                        item.remove();
                        if (catalogProduct[i].size == 'big') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'g4') {
                        item.remove();
                        if (catalogProduct[i].size== 'little') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'g5') {
                        item.remove();
                        if (catalogProduct[i].shelf == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'g6') {
                        item.remove();
                        if (catalogProduct[i].shelf == 'no') {
                            addTawar();
                        }
                    }
                    //////////////////////////////////////////////////////
                    if (event.target && event.target.value == 'q1') {
                        item.remove();
                        if (catalogProduct[i].holder == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'q2') {
                        item.remove();
                        if (catalogProduct[i].toy_furniture == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'q3') {
                        item.remove();
                        if (catalogProduct[i].furniture == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'q4') {
                        item.remove();
                        if (catalogProduct[i].crayons == 'yes') {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'q5') {
                        item.remove();
                        if (+(catalogProduct[i].price) > 40 && catalogProduct[i].category == "rest") {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'q6') {
                        item.remove();
                        if (+(catalogProduct[i].price) >= 16 && +(catalogProduct[i].price) <= 40 && catalogProduct[i].category == "rest") {
                            addTawar();
                        }
                    }
                    if (event.target && event.target.value == 'q7') {
                        item.remove();
                        if (+(catalogProduct[i].price) <= 16 && catalogProduct[i].category == "rest") {
                            addTawar();
                        }
                    }
                });
                
            }
function k() {
    console.log('test');
}