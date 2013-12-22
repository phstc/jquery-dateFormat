describe('#date', function() {
  it('formats month', function() {
    var date = '1982-01-15 01:10:20.546';

    expect($.format.date(date, 'M')).toEqual('1');
    expect($.format.date(date, 'MM')).toEqual('01');
    expect($.format.date(date, 'MMM')).toEqual('Jan');
    expect($.format.date(date, 'MMMM')).toEqual('January');
  });

  it('formats day', function() {
    var date = '1982-01-01 01:10:20.546';

    expect($.format.date(date, 'd')).toEqual('1');
    expect($.format.date(date, 'dd')).toEqual('01');
    expect($.format.date(date, 'ddd')).toEqual('Friday');
    expect($.format.date(date, 'D')).toEqual('1st');
  });

  it('formats hour', function() {
    var date = '1982-01-01 23:10:20.546';

    expect($.format.date(date, 'h')).toEqual('11');
    expect($.format.date(date, 'hh')).toEqual('11');
    expect($.format.date(date, 'H')).toEqual('23');
    expect($.format.date(date, 'HH')).toEqual('23');
  });

  describe('all patterns', function() {
    it('formats `1982-10-15 01:10:20.546`', function() {
      var date = '1982-10-15 01:10:20.546';

      expect($.format.date(date, 'yy')).toEqual('82');
      expect($.format.date(date, 'yyyy')).toEqual('1982');
      expect($.format.date(date, 'M')).toEqual('10');
      expect($.format.date(date, 'MM')).toEqual('10');
      expect($.format.date(date, 'MMM')).toEqual('Oct');
      expect($.format.date(date, 'MMMM')).toEqual('October');
      expect($.format.date(date, 'd')).toEqual('15');
      expect($.format.date(date, 'dd')).toEqual('15');
      expect($.format.date(date, 'ddd')).toEqual('Friday');
      expect($.format.date(date, 'D')).toEqual('15th');
      expect($.format.date(date, 'h')).toEqual('1');
      expect($.format.date(date, 'hh')).toEqual('01');
      expect($.format.date(date, 'H')).toEqual('1');
      expect($.format.date(date, 'HH')).toEqual('01');
      expect($.format.date(date, 'mm')).toEqual('10');
      expect($.format.date(date, 'ss')).toEqual('20');
      expect($.format.date(date, 'SSS')).toEqual('546');
      expect($.format.date(date, 'a')).toEqual('AM');
      expect($.format.date(date, 'p')).toEqual('a.m.');
     });
  });

  it('combines patterns', function() {
    var date = '1982-10-15 01:10:20.546';

    expect($.format.date(date, 'MM/dd/yyyy HH:mm:ss')).toEqual('10/15/1982 01:10:20');
  });
});

