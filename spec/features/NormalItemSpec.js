'use stric'

describe('Normal product', function() {

  it('decreases quality and sell by date by one', function() {
    let foo = new Item('Foo', 5, 10)
    const gildedRose = new Shop([foo])
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toEqual(4);
    expect(gildedRose.items[0].quality).toEqual(9);
  });

  it('does not allow quality to be under 0', function() {
    let foo = new Item('Foo', 1, 0)
    const gildedRose = new Shop([foo])
    gildedRose.updateQuality();
    expect(gildedRose.items[0].sellIn).toEqual(0);
    expect(gildedRose.items[0].quality).toEqual(0);
  });

});
