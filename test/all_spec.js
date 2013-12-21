describe('ISO8601', function() {
  it('formats properly', function() {
    var jsonDate = '2009-12-18T10:54:50Z';
    expect($.format.date(jsonDate, 'dd/MM/yyyy')).toEqual('18/12/2009');
    expect($.format.date(jsonDate, 'MMM/yyyy')).toEqual('Dec/2009');
    expect($.format.date(jsonDate, 'MM')).toEqual('12');
    expect($.format.date(jsonDate, 'dd')).toEqual('18');
    expect($.format.date(jsonDate, 'yyyy')).toEqual('2009');
    expect($.format.date(jsonDate, 'MM')).toEqual('12');
    expect($.format.date(jsonDate, 'hh:mm:ss')).toEqual('10:54:50');
    expect($.format.date(jsonDate, 'hh')).toEqual('10');
    expect($.format.date(jsonDate, 'mm')).toEqual('54');
    expect($.format.date(jsonDate, 'ss')).toEqual('50');
    expect($.format.date(jsonDate, 'dd/MM/yyyy hh:mm:ss a')).toEqual('18/12/2009 10:54:50 AM');
    expect($.format.date(jsonDate, 'dd/MM/yyyy hh:mm:ss p')).toEqual('18/12/2009 10:54:50 a.m.');
    expect($.format.date(jsonDate, 'zdd/bMM/cyyyy xhh:emm:fss')).toEqual('z18/b12/c2009 x10:e54:f50');

    jsonDate = '2009-12-18T13:54:50Z';
    expect($.format.date(jsonDate, 'dd/MM/yyyy hh:mm:ss')).toEqual('18/12/2009 01:54:50');
    expect($.format.date(jsonDate, 'dd/MM/yyyy HH:mm:ss')).toEqual('18/12/2009 13:54:50');
    expect($.format.date(jsonDate, 'dd/MM/yyyy hh:mm:ss a')).toEqual('18/12/2009 01:54:50 PM');
    expect($.format.date(jsonDate, 'dd/MM/yyyy hh:mm:ss p')).toEqual('18/12/2009 01:54:50 p.m.');
  });
});


describe('java.util.Date', function() {
  it('formats properly', function() {
    expect($.format.date('2009-12-18 10:54:50.546', 'dd/MM/yyyy')).toEqual('18/12/2009');
    expect($.format.date('2009-12-18 10:54:50.546', 'MMM/yyyy')).toEqual('Dec/2009');
    expect($.format.date('2009-12-18 10:54:50.546', 'MM')).toEqual('12');
    expect($.format.date('2009-12-5 10:54:50.546', 'dd')).toEqual('05');
    expect($.format.date('2009-12-18 10:54:50.546', 'yyyy')).toEqual('2009');
    expect($.format.date('2009-12-18 10:54:50.546', 'MM')).toEqual('12');
    expect($.format.date('2009-12-18 10:54:50.546', 'hh:mm:ss')).toEqual('10:54:50');
    expect($.format.date('2009-12-18 10:54:50.546', 'hh')).toEqual('10');
    expect($.format.date('2009-12-18 10:54:50.546', 'mm')).toEqual('54');
    expect($.format.date('2009-12-18 10:54:50.546', 'ss')).toEqual('50');
    expect($.format.date('2009-12-18 10:54:50.546', 'SSS')).toEqual('546');
    expect($.format.date('2009-12-18 13:54:50.546', 'dd/MM/yyyy hh:mm:ss')).toEqual('18/12/2009 01:54:50');
    expect($.format.date('2009-12-18 14:54:50.546', 'dd/MM/yyyy HH:mm:ss')).toEqual('18/12/2009 14:54:50');
    expect($.format.date('2009-12-18 10:54:50.546', 'dd/MM/yyyy hh:mm:ss a')).toEqual('18/12/2009 10:54:50 AM');
    expect($.format.date('2009-12-18 10:54:50.546', 'dd/MM/yyyy hh:mm:ss p')).toEqual('18/12/2009 10:54:50 a.m.');
    expect($.format.date('2009-12-18 13:54:50.546', 'dd/MM/yyyy hh:mm:ss a')).toEqual('18/12/2009 01:54:50 PM');
    expect($.format.date('2009-12-18 13:54:50.546', 'dd/MM/yyyy hh:mm:ss p')).toEqual('18/12/2009 01:54:50 p.m.');
    expect($.format.date('2009-12-18 10:54:50.546', 'zdd/bMM/cyyyy xhh:emm:fss')).toEqual('z18/b12/c2009 x10:e54:f50');
    expect($.format.date(new Date(1274370756526), 'yyyy')).toEqual('2010');
    expect($.format.date('2009-12-18 10:54:50.546', 'ddd')).toEqual('Friday');
  });
});

describe('DateType2', function() {
  /* ??? Wed Jan 13 10:43:41 CET 2010 */
  it('formats properly', function() {
    expect($.format.date('Wed Jan 1 10:43:41 CET 2010', 'dd/MM/yyyy')).toEqual('01/01/2010');
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'MMM/yyyy')).toEqual('Jan/2010');
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'MM')).toEqual('01');
    expect($.format.date('Wed Jan 5 10:43:41 CET 2010', 'dd')).toEqual('05');
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'yyyy')).toEqual('2010');
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'MM')).toEqual('01');
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'hh:mm:ss')).toEqual('10:43:41');
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'hh')).toEqual('10');
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'mm')).toEqual('43');
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'ss')).toEqual('41');
    expect($.format.date('Wed Jan 13 13:43:41 CET 2010', 'dd/MM/yyyy hh:mm:ss')).toEqual('13/01/2010 01:43:41');
    expect($.format.date('Wed Jan 13 14:43:41 CET 2010', 'dd/MM/yyyy HH:mm:ss')).toEqual('13/01/2010 14:43:41');
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'dd/MM/yyyy hh:mm:ss a')).toEqual('13/01/2010 10:43:41 AM');
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'dd/MM/yyyy hh:mm:ss p')).toEqual('13/01/2010 10:43:41 a.m.');
    expect($.format.date('Wed Jan 13 17:43:41 CET 2010', 'dd/MM/yyyy hh:mm:ss a')).toEqual('13/01/2010 05:43:41 PM');
    expect($.format.date('Wed Jan 13 17:43:41 CET 2010', 'dd/MM/yyyy hh:mm:ss p')).toEqual('13/01/2010 05:43:41 p.m.');
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'zdd/bMM/cyyyy xhh:emm:fss')).toEqual('z13/b01/c2010 x10:e43:f41');
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'ddd')).toEqual('Wednesday');
  });
});

describe('JAXB', function() {
  it('formats properly', function() {
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'dd/MM/yyyy')).toEqual('19/10/2010');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'MMM/yyyy')).toEqual('Oct/2010');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'MM')).toEqual('10');
    expect($.format.date('2010-10-05T11:40:33.527+02:00', 'dd')).toEqual('05');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'yyyy')).toEqual('2010');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'dd')).toEqual('19');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'hh:mm:ss')).toEqual('11:40:33');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'hh')).toEqual('11');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'mm')).toEqual('40');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'ss')).toEqual('33');
    expect($.format.date('2010-10-19T13:43:41.527+02:00', 'dd/MM/yyyy hh:mm:ss')).toEqual('19/10/2010 01:43:41');
    expect($.format.date('2010-10-19T14:43:41.527+02:000', 'dd/MM/yyyy HH:mm:ss')).toEqual('19/10/2010 14:43:41');
    expect($.format.date('2010-10-19T10:43:41.527+02:00', 'dd/MM/yyyy hh:mm:ss a')).toEqual('19/10/2010 10:43:41 AM');
    expect($.format.date('2010-10-19T10:43:41.527+02:00', 'dd/MM/yyyy hh:mm:ss p')).toEqual('19/10/2010 10:43:41 a.m.');
    expect($.format.date('2010-10-19T17:43:41.527+02:00', 'dd/MM/yyyy hh:mm:ss a')).toEqual('19/10/2010 05:43:41 PM');
    expect($.format.date('2010-10-19T17:43:41.527+02:00', 'dd/MM/yyyy hh:mm:ss p')).toEqual('19/10/2010 05:43:41 p.m.');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'zdd/bMM/cyyyy xhh:emm:fss')).toEqual('z19/b10/c2010 x11:e40:f33');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'ddd')).toEqual('Tuesday');
  });
});

describe('Javascript date format', function() {
  it('formats properly', function() {
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'dd/MM/yyyy')).toEqual('19/10/2010');
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'MMM/yyyy')).toEqual('Oct/2010');
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'MM')).toEqual('10');
    expect($.format.date(new Date('10/5/2010 11:40:33').toString(), 'dd')).toEqual('05');
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'yyyy')).toEqual('2010');
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'dd')).toEqual('19');
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'hh:mm:ss')).toEqual('11:40:33');
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'hh')).toEqual('11');
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'mm')).toEqual('40');
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'ss')).toEqual('33');
    expect($.format.date(new Date('10/19/2010 13:43:41').toString(), 'dd/MM/yyyy hh:mm:ss')).toEqual('19/10/2010 01:43:41');
    expect($.format.date(new Date('10/19/2010 14:43:41').toString(), 'dd/MM/yyyy HH:mm:ss')).toEqual('19/10/2010 14:43:41');
    expect($.format.date(new Date('10/19/2010 10:43:41').toString(), 'dd/MM/yyyy hh:mm:ss a')).toEqual('19/10/2010 10:43:41 AM');
    expect($.format.date(new Date('10/19/2010 10:43:41').toString(), 'dd/MM/yyyy hh:mm:ss p')).toEqual('19/10/2010 10:43:41 a.m.');
    expect($.format.date(new Date('10/19/2010 17:43:41').toString(), 'dd/MM/yyyy hh:mm:ss a')).toEqual('19/10/2010 05:43:41 PM');
    expect($.format.date(new Date('10/19/2010 17:43:41').toString(), 'dd/MM/yyyy hh:mm:ss p')).toEqual('19/10/2010 05:43:41 p.m.');
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'zdd/bMM/cyyyy xhh:emm:fss')).toEqual('z19/b10/c2010 x11:e40:f33');
    expect($.format.date(new Date('10/19/2010 10:43:41').toString(), 'ddd')).toEqual('Tuesday');
  });
});


describe('DateType6', function() {
  it('formats properly', function() {
    expect($.format.date('Fri Apr 08 2011 01:02:03 GMT+0200 (W. Europe Daylight Time)', 'dd/MM/yyyy')).toEqual('08/04/2011');
    expect($.format.date('Fri Apr 08 2011 01:02:03 GMT+0200 (W. Europe Daylight Time)', 'MMM/yyyy')).toEqual('Apr/2011');
    expect($.format.date('Fri Apr 08 2011 01:02:03 GMT+0200 (W. Europe Daylight Time)', 'MM')).toEqual('04');
    expect($.format.date('Fri Apr 08 2011 01:02:03 GMT+0200 (W. Europe Daylight Time)', 'dd')).toEqual('08');
    expect($.format.date('Fri Apr 08 2011 01:02:03 GMT+0200 (W. Europe Daylight Time)', 'yyyy')).toEqual('2011');
    expect($.format.date('Fri Apr 19 2011 01:02:03 GMT+0800 (China Standard Time)', 'dd')).toEqual('19');
    expect($.format.date('Fri Apr 08 2011 01:02:03 GMT+0200 (W. Europe Daylight Time)', 'hh:mm:ss')).toEqual('01:02:03');
    expect($.format.date('Fri Apr 08 2011 01:02:03 GMT+0200 (W. Europe Daylight Time)', 'hh')).toEqual('01');
    expect($.format.date('Fri Apr 08 2011 01:02:03 GMT+0200 (W. Europe Daylight Time)', 'mm')).toEqual('02');
    expect($.format.date('Fri Apr 08 2011 01:02:03 GMT+0200 (W. Europe Daylight Time)', 'ss')).toEqual('03');
    expect($.format.date('Fri Apr 08 2011 13:02:03 GMT+0200 (W. Europe Daylight Time)', 'dd/MM/yyyy hh:mm:ss')).toEqual('08/04/2011 01:02:03');
    expect($.format.date('Fri Apr 08 2011 14:02:03 GMT+0200 (W. Europe Daylight Time)', 'dd/MM/yyyy HH:mm:ss')).toEqual('08/04/2011 14:02:03');
    expect($.format.date('Fri Apr 08 2011 01:02:03 GMT+0200 (W. Europe Daylight Time)', 'dd/MM/yyyy hh:mm:ss a')).toEqual('08/04/2011 01:02:03 AM');
    expect($.format.date('Fri Apr 08 2011 01:02:03 GMT+0200 (W. Europe Daylight Time)', 'dd/MM/yyyy hh:mm:ss p')).toEqual('08/04/2011 01:02:03 a.m.');
    expect($.format.date('Fri Apr 08 2011 19:02:03 GMT+0200 (W. Europe Daylight Time)', 'dd/MM/yyyy hh:mm:ss a')).toEqual('08/04/2011 07:02:03 PM');
    expect($.format.date('Fri Apr 08 2011 19:02:03 GMT+0200 (W. Europe Daylight Time)', 'dd/MM/yyyy hh:mm:ss p')).toEqual('08/04/2011 07:02:03 p.m.');
    expect($.format.date('Fri Apr 08 2011 01:02:03 GMT+0200 (W. Europe Daylight Time)', 'zdd/bMM/cyyyy xhh:emm:fss')).toEqual('z08/b04/c2011 x01:e02:f03');
    expect($.format.date('Fri Apr 08 2011 14:02:03 GMT+0200 (W. Europe Daylight Time)', 'ddd')).toEqual('Friday');
  });
});

describe('DateType7', function() {
  /* Reference: http://pablocantero.com/blog/2010/09/04/jquery-plugin-javascript-for-java-util-date-tostring-format/#comment-259520318 */
  it('formats properly', function() {
    expect($.format.date('2009-04-19T16:11:05-02:00', 'dd/MM/yyyy')).toEqual('19/04/2009');
    expect($.format.date('2009-04-19T16:11:05-02:00', 'MMM/yyyy')).toEqual('Apr/2009');
  });
});

describe('DateType8', function() {
  /* Reference: http://pablocantero.com/blog/2010/09/04/jquery-plugin-javascript-for-java-util-date-tostring-format/#comment-178490699 */
  it('formats properly', function() {
    expect($.format.date('Mon Mar 28 2011 17:45:00 GMT-0400 (Eastern Daylight Time)', 'hh:mma')).toEqual('05:45PM');
    expect($.format.date('Mon Mar 28 2011 17:45:00 GMT-0400 (Eastern Daylight Time)', 'hh:mmp')).toEqual('05:45p.m.');

  });
});

describe('Day in week', function() {
  it('formats properly', function() {
    expect($.format.date('Mon Mar 28 2011 17:45:00 GMT-0400 (Eastern Daylight Time)', 'ddd')).toEqual('Monday');
  });
});

describe('Month in year', function() {
  it('formats properly', function() {
    expect($.format.date('Mon Mar 28 2011 17:45:00 GMT-0400 (Eastern Daylight Time)', 'MMM')).toEqual('Mar');
    expect($.format.date('Mon Mar 28 2011 17:45:00 GMT-0400 (Eastern Daylight Time)', 'MMMM')).toEqual('March');
  });
});

describe('Long month', function() {
  it('formats properly', function() {
    expect($.format.date('Mon Feb 28 2011 17:45:00 GMT-0400 (Eastern Daylight Time)', 'MMMM')).toEqual('February');

  });
});

describe('Short year', function() {
  it('formats properly', function() {
    expect($.format.date('Mon Feb 28 2011 17:45:00 GMT-0400 (Eastern Daylight Time)', 'yy')).toEqual('11');
    expect($.format.date('Mon Feb 28 20112 17:45:00 GMT-0400 (Eastern Daylight Time)', 'yy')).toEqual('12');
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'dd.MM.yy')).toEqual('13.01.10');

  });
});

describe('Short hour', function() {
  it('formats properly', function() {
    expect($.format.date('Mon Feb 28 2011 17:45:00 GMT-0400 (Eastern Daylight Time)', 'h')).toEqual('5');
    expect($.format.date('Mon Feb 28 20112 17:45:00 GMT-0400 (Eastern Daylight Time)', 'h')).toEqual('5');
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'dd.MM.yy h')).toEqual('13.01.10 10');
    expect($.format.date('Wed Jan 25 06:23:38 PST 2012', 'h')).toEqual('6');
    expect($.format.date('Wed Jan 25 06:23:38 PST 2012', 'hh')).toEqual('06');
    expect($.format.date('Mon Feb 28 2011 17:45:00 GMT-0400 (Eastern Daylight Time)', 'h')).toEqual('5');
    expect($.format.date('Mon Feb 28 20112 17:45:00 GMT-0400 (Eastern Daylight Time)', 'h')).toEqual('5');
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'dd.MM.yy h')).toEqual('13.01.10 10');

  });
});

describe('Long hour', function() {
  it('formats properly', function() {
    expect($.format.date('Mon Feb 28 2011 17:45:00 GMT-0400 (Eastern Daylight Time)', 'H')).toEqual('17');
    expect($.format.date('Mon Feb 28 20112 17:45:00 GMT-0400 (Eastern Daylight Time)', 'H')).toEqual('17');
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'dd.MM.yy H')).toEqual('13.01.10 10');
    expect($.format.date('Wed Jan 25 06:23:38 PST 2012', 'H')).toEqual('6');
    expect($.format.date('Wed Jan 25 06:23:38 PST 2012', 'HH')).toEqual('06');
    expect($.format.date('Wed Jan 25 6:23:38 PST 2012', 'HH')).toEqual('06');
    expect($.format.date('Mon Feb 28 2011 17:45:00 GMT-0400 (Eastern Daylight Time)', 'H')).toEqual('17');
    expect($.format.date('Mon Feb 28 20112 17:45:00 GMT-0400 (Eastern Daylight Time)', 'H')).toEqual('17');
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'dd.MM.yy H')).toEqual('13.01.10 10');

  });
});

describe('Issue 19', function() {
  it('formats properly', function() {
    expect($.format.date('2011-09-29 14:50:49', 'MMM dd, yyyy')).toEqual('Sep 29, 2011');
  });
});

describe('Issue 17', function() {
  it('formats properly', function() {
    expect($.format.date('2011-04-25T09:04:14.7270000', 'yyyy-MM-dd HH:mm')).toEqual('2011-04-25 09:04');

  });
});

describe('Short day', function() {
  it('formats properly', function() {
    expect($.format.date('Wed Jan 09 06:23:38 PST 2012', 'MMMM d, yyyy')).toEqual('January 9, 2012');
    expect($.format.date('Wed Jan 09 06:23:38 PST 2012', 'MMMM dd, yyyy')).toEqual('January 09, 2012');
    expect($.format.date('Wed Jan 09 06:23:38 PST 2012', 'yyyy.M.d')).toEqual('2012.1.9');
    expect($.format.date('Wed Jan 09 06:23:38 PST 2012', 'M.d.yyyy')).toEqual('1.9.2012');
  });
});

describe('Minute', function() {
  it('formats properly', function() {
    expect($.format.date('Wed Jan 09 06:3:38 PST 2012', 'm')).toEqual('3');
    expect($.format.date('Wed Jan 09 06:3:38 PST 2012', 'mm')).toEqual('03');
    expect($.format.date('2013-04-17 10:8:1', 'MMM dd yyyy HH:mm:ss')).toEqual('Apr 17 2013 10:08:01');
  });
});

describe('Second', function() {
  it('formats properly', function() {
    expect($.format.date('Wed Jan 09 06:3:8 PST 2012', 's')).toEqual('8');
    expect($.format.date('Wed Jan 09 06:3:8 PST 2012', 'ss')).toEqual('08');
  });
});

describe('Japonese', function() {
  it('formats properly', function() {
    expect($.format.date('Wed Jan 09 06:23:38 PST 2012', 'yyyy年MM月dd日')).toEqual('2012年01月09日');
  });
});

describe('Issue 24', function() {
  it('formats properly', function() {
    expect($.format.date('Wed Jan 09 06:23:38 PST 2012', '-')).toEqual('-');
    expect($.format.date('Wed Jan 09 06:23:38 PST 2012', 'd-')).toEqual('9-');
    expect($.format.date('Wed Jan 09 06:23:38 PST 2012', 'd/')).toEqual('9/');
  });
});

describe('PR 22', function() {
  it('formats properly', function() {
    // https://github.com/phstc/jquery-dateFormat/pull/22
    expect($.format.date('2012-02-07CET00:00:00', 'dd/MM/yyyy')).toEqual('07/02/2012');
    expect($.format.date('2012-02-07CET00:00:00', 'MMM/yyyy')).toEqual('Feb/2012');
    expect($.format.date('2012-02-07CET00:00:00', 'MM')).toEqual('02');
    expect($.format.date('2012-02-07CET00:00:00', 'dd')).toEqual('07');
    expect($.format.date('2012-02-07CET00:00:00', 'yyyy')).toEqual('2012');
  });
});

describe('Unix timestamp', function() {
  it('formats properly', function() {
    // https://github.com/phstc/jquery-dateFormat/pull/22
    var testDate = new Date('Jan 2, 2000 01:02:03');
    expect($.format.date(testDate.getTime(), 'MM')).toEqual('01');
    expect($.format.date(testDate.getTime(), 'd')).toEqual('2');
    expect($.format.date(testDate.getTime(), 'yyyy')).toEqual('2000');
    expect($.format.date(testDate.getTime(), 'HH')).toEqual('01');
    expect($.format.date(testDate.getTime(), 'mm')).toEqual('02');
    expect($.format.date(testDate.getTime(), 'ss')).toEqual('03');
  });
});

describe('testShortMonthNoPrependedZero', function() {
  it('formats properly', function() {
    var testDate = new Date('Jan 2, 2000 01:02:03');
    expect($.format.date('Wed Feb 09 06:23:38 PST 2012', 'M')).toEqual('2');
    expect($.format.date(testDate.getTime(), 'M')).toEqual('1');
    expect($.format.date('2012-05-07CET00:00:00', 'M')).toEqual('5');
  });
});

describe('Ordinal days', function() {
  it('formats properly', function() {
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

describe('Pretty date', function() {
  it('formats properly', function() {
    var today = new Date();
    var daysago1 = new Date();
    var daysago6 = new Date();
    var daysago7 = new Date();
    var daysago8 = new Date();
    var daysago13 = new Date();
    var daysago14 = new Date();
    var daysago15 = new Date();
    var daysago20 = new Date();
    var daysago21 = new Date();
    var daysago22 = new Date();
    var daysago27 = new Date();
    var daysago28 = new Date();
    var daysago29 = new Date();
    var daysago30 = new Date();
    var daysago31 = new Date();
    var daysago100 = new Date();
    var isoDateFormat = "2013-07-14T23:22:33Z";
    var jaxbDateFormat = "2013-07-14T16:22:33.527-07:00";
    var unixDateFormat = "Sat Jul 14 2013 16:22:33 GMT-0700 (PDT)";
    daysago1.setDate(daysago1.getDate() -1);
    daysago6.setDate(daysago6.getDate() -6);
    daysago7.setDate(daysago7.getDate() -7);
    daysago8.setDate(daysago8.getDate() -8);
    daysago13.setDate(daysago13.getDate() -13);
    daysago14.setDate(daysago14.getDate() -14);
    daysago15.setDate(daysago15.getDate() -15);
    daysago20.setDate(daysago20.getDate() -20);
    daysago21.setDate(daysago21.getDate() -21);
    daysago22.setDate(daysago22.getDate() -22);
    daysago27.setDate(daysago27.getDate() -27);
    daysago28.setDate(daysago28.getDate() -28);
    daysago29.setDate(daysago29.getDate() -29);
    daysago30.setDate(daysago30.getDate() -30);
    daysago31.setDate(daysago31.getDate() -31);
    daysago100.setDate(daysago100.getDate() -100);
    expect($.format.prettyDate(today)).toEqual('just now');
    expect($.format.prettyDate(today.toString())).toEqual('just now');
    expect($.format.prettyDate(today.getTime())).toEqual('just now');
    expect($.format.prettyDate(daysago1)).toEqual('Yesterday');
    expect($.format.prettyDate(daysago6)).toEqual('6 days ago');
    expect($.format.prettyDate(daysago7)).toEqual('1 weeks ago');
    expect($.format.prettyDate(daysago8)).toEqual('2 weeks ago');
    expect($.format.prettyDate(daysago13)).toEqual('2 weeks ago');
    expect($.format.prettyDate(daysago14)).toEqual('2 weeks ago');
    expect($.format.prettyDate(daysago15)).toEqual('3 weeks ago');
    expect($.format.prettyDate(daysago20)).toEqual('3 weeks ago');
    expect($.format.prettyDate(daysago21)).toEqual('3 weeks ago');
    expect($.format.prettyDate(daysago27)).toEqual('4 weeks ago');
    expect($.format.prettyDate(daysago28)).toEqual('4 weeks ago');
    expect($.format.prettyDate(daysago29)).toEqual('5 weeks ago');
    expect($.format.prettyDate(daysago30)).toEqual('5 weeks ago');
    expect($.format.prettyDate(daysago31)).toEqual('more than 5 weeks ago');
    expect($.format.prettyDate(daysago100)).toEqual('more than 5 weeks ago');
    expect($.format.prettyDate(isoDateFormat)).toEqual('more than 5 weeks ago');
    expect($.format.prettyDate(jaxbDateFormat)).toEqual('more than 5 weeks ago');
    expect($.format.prettyDate(unixDateFormat)).toEqual('more than 5 weeks ago');
  });
});

describe('Quoted chars', function() {
  it('formats properly', function() {
    expect($.format.date('Wed Jan 09 06:3:8 PST 2012', "s 'seconds'")).toEqual('8 seconds');
    expect($.format.date('Wed Jan 09 06:3:8 PST 2012', "'second:' s")).toEqual('second: 8');
    expect($.format.date('Wed Jan 09 06:3:8 PST 2012', "m 'sec' s")).toEqual('3 sec 8');
    expect($.format.date('Wed Jan 09 06:3:8 PST 2012', "s''")).toEqual("8'");
    expect($.format.date('Wed Jan 09 06:3:8 PST 2012', "h 'o''''clock'")).toEqual("6 o'clock");
  });
});

