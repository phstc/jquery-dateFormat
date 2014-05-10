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
      expect($.format.date(date, 'E')).toEqual('Fri');
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
      expect($.format.date(date, 'E')).toEqual('Fri');
     });
  });

  it('combines patterns', function() {
    var date = '1982-10-15 01:10:20.546';

    expect($.format.date(date, 'MM/dd/yyyy HH:mm:ss')).toEqual('10/15/1982 01:10:20');
  });

  it('formats quoted chars', function() {
    expect($.format.date('Wed Jan 09 06:3:8 PST 2012', "s 'seconds'")).toEqual('8 seconds');
    expect($.format.date('Wed Jan 09 06:3:8 PST 2012', "'second:' s")).toEqual('second: 8');
    expect($.format.date('Wed Jan 09 06:3:8 PST 2012', "m 'sec' s")).toEqual('3 sec 8');
    expect($.format.date('Wed Jan 09 06:3:8 PST 2012', "s''")).toEqual("8'");
    expect($.format.date('Wed Jan 09 06:3:8 PST 2012', "h 'o''''clock'")).toEqual("6 o'clock");
  });

  it('formats ordinal days', function() {
      expect($.format.date(new Date('Jan 1, 2000 01:02:03'), 'D')).toEqual('1st');
      expect($.format.date(new Date('Jan 2, 2000 01:02:03'), 'D')).toEqual('2nd');
      expect($.format.date(new Date('Jan 3, 2000 01:02:03'), 'D')).toEqual('3rd');
      expect($.format.date(new Date('Jan 4, 2000 01:02:03'), 'D')).toEqual('4th');
      expect($.format.date(new Date('Jan 5, 2000 01:02:03'), 'D')).toEqual('5th');
      expect($.format.date(new Date('Jan 6, 2000 01:02:03'), 'D')).toEqual('6th');
      expect($.format.date(new Date('Jan 7, 2000 01:02:03'), 'D')).toEqual('7th');
      expect($.format.date(new Date('Jan 8, 2000 01:02:03'), 'D')).toEqual('8th');
      expect($.format.date(new Date('Jan 9, 2000 01:02:03'), 'D')).toEqual('9th');
      expect($.format.date(new Date('Jan 10, 2000 01:02:03'), 'D')).toEqual('10th');
      expect($.format.date(new Date('Jan 11, 2000 01:02:03'), 'D')).toEqual('11th');
      expect($.format.date(new Date('Jan 12, 2000 01:02:03'), 'D')).toEqual('12th');
      expect($.format.date(new Date('Jan 13, 2000 01:02:03'), 'D')).toEqual('13th');
      expect($.format.date(new Date('Jan 14, 2000 01:02:03'), 'D')).toEqual('14th');
      expect($.format.date(new Date('Jan 15, 2000 01:02:03'), 'D')).toEqual('15th');
      expect($.format.date(new Date('Jan 16, 2000 01:02:03'), 'D')).toEqual('16th');
      expect($.format.date(new Date('Jan 17, 2000 01:02:03'), 'D')).toEqual('17th');
      expect($.format.date(new Date('Jan 18, 2000 01:02:03'), 'D')).toEqual('18th');
      expect($.format.date(new Date('Jan 19, 2000 01:02:03'), 'D')).toEqual('19th');
      expect($.format.date(new Date('Jan 20, 2000 01:02:03'), 'D')).toEqual('20th');
      expect($.format.date(new Date('Jan 21, 2000 01:02:03'), 'D')).toEqual('21st');
      expect($.format.date(new Date('Jan 22, 2000 01:02:03'), 'D')).toEqual('22nd');
      expect($.format.date(new Date('Jan 23, 2000 01:02:03'), 'D')).toEqual('23rd');
      expect($.format.date(new Date('Jan 24, 2000 01:02:03'), 'D')).toEqual('24th');
      expect($.format.date(new Date('Jan 25, 2000 01:02:03'), 'D')).toEqual('25th');
      expect($.format.date(new Date('Jan 26, 2000 01:02:03'), 'D')).toEqual('26th');
      expect($.format.date(new Date('Jan 27, 2000 01:02:03'), 'D')).toEqual('27th');
      expect($.format.date(new Date('Jan 28, 2000 01:02:03'), 'D')).toEqual('28th');
      expect($.format.date(new Date('Jan 29, 2000 01:02:03'), 'D')).toEqual('29th');
      expect($.format.date(new Date('Jan 30, 2000 01:02:03'), 'D')).toEqual('30th');
      expect($.format.date(new Date('Jan 31, 2000 01:02:03'), 'D')).toEqual('31st');
    });
});

