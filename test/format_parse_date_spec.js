describe('#parseDate', function() {
  it('parses a timestamp', function() {
    var date            = new Date(1982, 9, 15, 1, 10, 20, 546),
        timestamp       = date.getTime();

    var parsedDate = $.format.parseDate(timestamp);

    pablosBirthdayExpects(parsedDate, '546');
  });

  describe('yyyy-MM-dd', function() {
    it('parses `1982-10-15T01:10:20+02:00`', function() {
      var date = '1982-10-15T01:10:20+02:00';

      var parsedDate = $.format.parseDate(date);

      pablosBirthdayExpects(parsedDate);
    });

    it('parses `1982-10-15T01:10:20Z`', function() {
      var date = '1982-10-15T01:10:20Z';

      var parsedDate = $.format.parseDate(date);

      pablosBirthdayExpects(parsedDate);
    });
  });

  it('parses `Fri Oct 15 01:10:20 CET 1982`', function() {
    var date = 'Fri Oct 15 01:10:20 CET 1982';

    var parsedDate = $.format.parseDate(date);

    pablosBirthdayExpects(parsedDate);
  });

  it('parses `1982-10-15 01:10:20.546`', function() {
    var date = '1982-10-15 01:10:20.546';

    var parsedDate = $.format.parseDate(date);

    pablosBirthdayExpects(parsedDate, '546');
  });

  it('parses `Fri Oct 15 1982 01:10:20 GMT-0800 (PST)`', function() {
    var date = 'Fri Oct 15 1982 01:10:20 GMT-0800 (PST)';

    var parsedDate = $.format.parseDate(date);

    pablosBirthdayExpects(parsedDate);
  });

  it('parses `Fri Oct 15 1982 01:10:20 GMT+0800 (China Standard Time)`', function() {
    var date = 'Fri Oct 15 1982 01:10:20 GMT+0800 (China Standard Time)';

    var parsedDate = $.format.parseDate(date);

    pablosBirthdayExpects(parsedDate);
  });

  it('parses `Fri Oct 15 1982 01:10:20 GMT+0200 (W. Europe Daylight Time)`', function() {
    var date = 'Fri Oct 15 1982 01:10:20 GMT+0200 (W. Europe Daylight Time)';

    var parsedDate = $.format.parseDate(date);

    pablosBirthdayExpects(parsedDate);
  });

  it('parses `1982-10-15CET01:10:20`', function() {
    var date = '1982-10-15CET01:10:20';

    var parsedDate = $.format.parseDate(date);

    pablosBirthdayExpects(parsedDate);
  });

  function pablosBirthdayExpects(parsedDate, millis) {
    if (millis === undefined) {
      millis = '';
    }

    expect(parsedDate.year).toEqual('1982');
    expect(parsedDate.month).toEqual('10');
    expect(parsedDate.dayOfMonth).toEqual('15');
    expect(parsedDate.dayOfWeek).toEqual('5');
    expect(parsedDate.time.time).toEqual('01:10:20');
    expect(parsedDate.time.hour).toEqual('01');
    expect(parsedDate.time.minute).toEqual('10');
    expect(parsedDate.time.second).toEqual('20');
    expect(parsedDate.time.millis).toEqual(millis);
  }
});
