'use strict'

describe('Sulfuras', function() {

  it('does not change the quality and sell by date', function() {
    let sulfuras = new Item('Sulfuras, Hand of Ragnaros', 30, 20)
    const gildedRose = new Shop([sulfuras])
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toEqual(30);
    expect(gildedRose.items[0].quality).toEqual(20);
  });
});
