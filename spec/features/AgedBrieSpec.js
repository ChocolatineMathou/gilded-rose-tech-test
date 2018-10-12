'use strict'

describe('Aged Brie', function() {

  it('increases the quality and decreases sell by date of "Aged Brie"', function() {
    let brie = new Item('Aged Brie', 10, 30)
    const gildedRose = new Shop([brie])
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toEqual(9);
    expect(gildedRose.items[0].quality).toEqual(31);
  });

  it('does not increase the quality above 50', function() {
    let brie = new Item('Aged Brie', 10, 50)
    const gildedRose = new Shop([brie])
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).not.toEqual(51);
    expect(gildedRose.items[0].quality).toEqual(50);
  });

  it('increases the quality by two when sell by date has passed', function() {
    let brie = new Item('Aged Brie', 0, 30)
    const gildedRose = new Shop([brie])
    gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).not.toEqual(31);
    expect(gildedRose.items[0].quality).toEqual(32);
  });
})
