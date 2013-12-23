describe('Excepted Inputs', function() {
  it('formats `2009-12-18T10:54:50Z`', function() {
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
  });

  it('formats `2009-12-18T13:54:50Z`', function() {
    jsonDate = '2009-12-18T13:54:50Z';
    expect($.format.date(jsonDate, 'dd/MM/yyyy hh:mm:ss')).toEqual('18/12/2009 01:54:50');
    expect($.format.date(jsonDate, 'dd/MM/yyyy HH:mm:ss')).toEqual('18/12/2009 13:54:50');
    expect($.format.date(jsonDate, 'dd/MM/yyyy hh:mm:ss a')).toEqual('18/12/2009 01:54:50 PM');
    expect($.format.date(jsonDate, 'dd/MM/yyyy hh:mm:ss p')).toEqual('18/12/2009 01:54:50 p.m.');
  });

  it('formats `2009-12-18 10:54:50.546`', function() {
    expect($.format.date('2009-12-18 10:54:50.546', 'dd/MM/yyyy')).toEqual('18/12/2009');
    expect($.format.date('2009-12-18 10:54:50.546', 'MMM/yyyy')).toEqual('Dec/2009');
    expect($.format.date('2009-12-18 10:54:50.546', 'MM')).toEqual('12');
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
    expect($.format.date('2009-12-18 10:54:50.546', 'ddd')).toEqual('Friday');
  });

  it('formats `Wed Jan 13 10:43:41 CET 2010`', function() {
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'MMM/yyyy')).toEqual('Jan/2010');
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'MM')).toEqual('01');
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

  it('formats `2010-10-19T11:40:33.527+02:00`', function() {
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'dd/MM/yyyy')).toEqual('19/10/2010');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'MMM/yyyy')).toEqual('Oct/2010');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'MM')).toEqual('10');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'yyyy')).toEqual('2010');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'dd')).toEqual('19');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'hh:mm:ss')).toEqual('11:40:33');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'hh')).toEqual('11');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'mm')).toEqual('40');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'ss')).toEqual('33');
    expect($.format.date('2010-10-19T13:43:41.527+02:00', 'dd/MM/yyyy hh:mm:ss')).toEqual('19/10/2010 01:43:41');
    expect($.format.date('2010-10-19T10:43:41.527+02:00', 'dd/MM/yyyy hh:mm:ss a')).toEqual('19/10/2010 10:43:41 AM');
    expect($.format.date('2010-10-19T10:43:41.527+02:00', 'dd/MM/yyyy hh:mm:ss p')).toEqual('19/10/2010 10:43:41 a.m.');
    expect($.format.date('2010-10-19T17:43:41.527+02:00', 'dd/MM/yyyy hh:mm:ss a')).toEqual('19/10/2010 05:43:41 PM');
    expect($.format.date('2010-10-19T17:43:41.527+02:00', 'dd/MM/yyyy hh:mm:ss p')).toEqual('19/10/2010 05:43:41 p.m.');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'zdd/bMM/cyyyy xhh:emm:fss')).toEqual('z19/b10/c2010 x11:e40:f33');
    expect($.format.date('2010-10-19T11:40:33.527+02:00', 'ddd')).toEqual('Tuesday');
  });

  it('formats `10/19/2010 11:40:33`', function() {
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'dd/MM/yyyy')).toEqual('19/10/2010');
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'MMM/yyyy')).toEqual('Oct/2010');
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'MM')).toEqual('10');
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'yyyy')).toEqual('2010');
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'dd')).toEqual('19');
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'hh:mm:ss')).toEqual('11:40:33');
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'hh')).toEqual('11');
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'mm')).toEqual('40');
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'ss')).toEqual('33');
    expect($.format.date(new Date('10/19/2010 11:40:33').toString(), 'zdd/bMM/cyyyy xhh:emm:fss')).toEqual('z19/b10/c2010 x11:e40:f33');
  });

  it('formats `Fri Apr 08 2011 01:02:03 GMT+0200 (W. Europe Daylight Time)`', function() {
    expect($.format.date('Fri Apr 08 2011 01:02:03 GMT+0200 (W. Europe Daylight Time)', 'dd/MM/yyyy')).toEqual('08/04/2011');
    expect($.format.date('Fri Apr 08 2011 01:02:03 GMT+0200 (W. Europe Daylight Time)', 'MMM/yyyy')).toEqual('Apr/2011');
    expect($.format.date('Fri Apr 08 2011 01:02:03 GMT+0200 (W. Europe Daylight Time)', 'MM')).toEqual('04');
    expect($.format.date('Fri Apr 08 2011 01:02:03 GMT+0200 (W. Europe Daylight Time)', 'dd')).toEqual('08');
    expect($.format.date('Fri Apr 08 2011 01:02:03 GMT+0200 (W. Europe Daylight Time)', 'yyyy')).toEqual('2011');
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

  it('formats `Fri Apr 19 2011 01:02:03 GMT+0800 (China Standard Time)`', function() {
    expect($.format.date('Fri Apr 19 2011 01:02:03 GMT+0800 (China Standard Time)', 'dd')).toEqual('19');
  });

  it('formats `Mon Mar 28 2011 17:45:00 GMT-0400 (Eastern Daylight Time)`', function() {
    expect($.format.date('Mon Mar 28 2011 17:45:00 GMT-0400 (Eastern Daylight Time)', 'ddd')).toEqual('Monday');
  });

  it('formats `Mon Mar 28 2011 17:45:00 GMT-0400 (Eastern Daylight Time)`', function() {
    expect($.format.date('Mon Mar 28 2011 17:45:00 GMT-0400 (Eastern Daylight Time)', 'MMM')).toEqual('Mar');
    expect($.format.date('Mon Mar 28 2011 17:45:00 GMT-0400 (Eastern Daylight Time)', 'MMMM')).toEqual('March');
  });

  it('formats `Mon Feb 28 2011 17:45:00 GMT-0400 (Eastern Daylight Time)`', function() {
    expect($.format.date('Mon Feb 28 2011 17:45:00 GMT-0400 (Eastern Daylight Time)', 'MMMM')).toEqual('February');
  });

  it('formats `Mon Feb 28 20112 17:45:00 GMT-0400 (Eastern Daylight Time)`', function() {
    expect($.format.date('Mon Feb 28 2011 17:45:00 GMT-0400 (Eastern Daylight Time)', 'yy')).toEqual('11');
    expect($.format.date('Mon Feb 28 20112 17:45:00 GMT-0400 (Eastern Daylight Time)', 'yy')).toEqual('12');
  });

  it('formats `Wed Jan 13 10:43:41 CET 2010`', function() {
    expect($.format.date('Wed Jan 13 10:43:41 CET 2010', 'dd.MM.yy')).toEqual('13.01.10');
  });

  it('formats `Wed Jan 09 06:23:38 PST 2012`', function() {
    expect($.format.date('Wed Jan 09 06:23:38 PST 2012', 'MMMM d, yyyy')).toEqual('January 9, 2012');
    expect($.format.date('Wed Jan 09 06:23:38 PST 2012', 'MMMM dd, yyyy')).toEqual('January 09, 2012');
    expect($.format.date('Wed Jan 09 06:23:38 PST 2012', 'yyyy.M.d')).toEqual('2012.1.9');
    expect($.format.date('Wed Jan 09 06:23:38 PST 2012', 'M.d.yyyy')).toEqual('1.9.2012');
  });

  it('formats `Wed Jan 09 06:3:38 PST 2012`', function() {
    expect($.format.date('Wed Jan 09 06:3:38 PST 2012', 'm')).toEqual('3');
    expect($.format.date('Wed Jan 09 06:3:38 PST 2012', 'mm')).toEqual('03');
  });

  it('formats `Wed Jan 09 06:3:8 PST 2012`', function() {
    expect($.format.date('Wed Jan 09 06:3:8 PST 2012', 's')).toEqual('8');
    expect($.format.date('Wed Jan 09 06:3:8 PST 2012', 'ss')).toEqual('08');
  });

  it('formats `Wed Jan 09 06:23:38 PST 2012`', function() {
    expect($.format.date('Wed Jan 09 06:23:38 PST 2012', 'yyyy年MM月dd日')).toEqual('2012年01月09日');
  });
});

