'use strict'

describe('Item', function() {

  let cake = new Item('Chocolate cake', 10, 20)

  it('returns the item name', function() {
    expect(cake.name).toEqual('Chocolate cake');
  });

  it('returns the sell by date', function() {
    expect(cake.sellIn).toEqual(10);
  });

  it('returns the item quality', function() {
    expect(cake.quality).toEqual(20);
  });

});
