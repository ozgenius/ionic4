import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2Page } from './tab2.page';
let component: Tab2Page;
describe('Tab2Page', () => {
  component=new Tab2Page();
  it("converts the hex to rgba", () =>{
    var test1 = component.hexToRGBA("#FFF", 0.3);
    var test2 = component.hexToRGBA("#FFFFFF", 1);
    var test3 = component.hexToRGBA("FFF", .5);
    var test4 = component.hexToRGBA("FFFFFF", 1);

    expect(test1).toBeTruthy([255, 255, 255, .3]);
    expect(test2).toBeTruthy([255, 255, 255, 1]);
    expect(test3).toBeTruthy([255, 255, 255, .5]);
    expect(test4).toBeTruthy([255, 255, 255, 1]);
  });

  it("throws error",()=>{
    var test5 = component.hexToRGBA("FFFFF", 0.3);

    expect(test5).toThrow;
  });
});
