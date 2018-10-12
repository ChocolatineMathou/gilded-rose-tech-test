'use strict'

describe('Backstage Passes', function() {

  it('increases quality and decreases sell by date by one', function() {
    let backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20)
    const gildedRose = new Shop([backstagePass])
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toEqual(10);
    expect(gildedRose.items[0].quality).toEqual(21);
  });

  it('increases quality by two when sell by date < 10', function() {
    let backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)
    const gildedRose = new Shop([backstagePass])
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toEqual(9);
    expect(gildedRose.items[0].quality).toEqual(22);
  });

  it('increases quality by three when sell by date < 5', function() {
    let backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)
    const gildedRose = new Shop([backstagePass])
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toEqual(4);
    expect(gildedRose.items[0].quality).toEqual(23);
  });

  it('drops quality to zero when sell by date < 0', function() {
    let backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)
    const gildedRose = new Shop([backstagePass])
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toEqual(-1);
    expect(gildedRose.items[0].quality).toEqual(0);
  });

  it('does not allow quality to be under 0', function() {
    let backstagePass = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)
    const gildedRose = new Shop([backstagePass])
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toEqual(-1);
    expect(gildedRose.items[0].quality).not.toEqual(-1);
    expect(gildedRose.items[0].quality).toEqual(0);
  });

});
