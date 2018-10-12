'use strict'

describe('Shop', function() {

  let cake = new Item('Chocolate cake', 10, 20)
  let brie = new Item('Aged Brie', 9, 20)
  let backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)
  let sulfuras = new Item('Sulfuras, Hand of Ragnaros', 30, 30)

  const gildedRose = new Shop([cake, brie, backstagePass, sulfuras])
  gildedRose.updateQuality();

  it('returns a list of item available', function() {
    expect(gildedRose.items[0].name).toEqual("Chocolate cake");
  });

  it('changes the quality and sell by date of a normal item', function() {
    expect(gildedRose.items[0].name).toEqual('Chocolate cake');
    expect(gildedRose.items[0].sellIn).toEqual(9);
    expect(gildedRose.items[0].quality).toEqual(19);
  });

  it('changes the quality and sell by date of "Backstage passes"', function() {
    expect(gildedRose.items[2].name).toEqual('Backstage passes to a TAFKAL80ETC concert');
    expect(gildedRose.items[2].sellIn).toEqual(9);
    expect(gildedRose.items[2].quality).toEqual(22);
  });

  it('does not change the quality and sell by date of "Sulfuras"', function() {
    expect(gildedRose.items[3].name).toEqual('Sulfuras, Hand of Ragnaros');
    expect(gildedRose.items[3].sellIn).toEqual(30);
    expect(gildedRose.items[3].quality).toEqual(30);
  });
});
