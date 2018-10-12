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
});
