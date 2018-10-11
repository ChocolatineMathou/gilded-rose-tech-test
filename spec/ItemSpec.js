'use strict'

describe('Item', function() {

  let item = new Item('Chocolate cake', 10, 20)

  it('returns the item name', function() {
    expect(item.name).toEqual('Chocolate cake');
  });

  it('returns the sell by date', function() {
    expect(item.sellIn).toEqual(10);
  });

  it('returns the item quality', function() {
    expect(item.quality).toEqual(20);
  });

});
