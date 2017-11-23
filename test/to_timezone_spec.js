describe('Excepted Inputs', function() {
    var jsonDate = '2009-12-18T10:54:50Z';
    it('toTimeZone `2009-12-18T10:54:50Z` `Asia/Tokyo` UTC+9 ', function() {
        expect($.format.toTimeZone(jsonDate, 'dd/MM/yyyy hh:mm:ss a')).toEqual('18/12/2009 07:54:50 PM');
        expect($.format.toTimeZone(jsonDate, 'dd/MM/yyyy HH:mm:ss')).toEqual('18/12/2009 19:54:50');
    });

    it('toTimeZone `2009-12-18T10:54:50Z` `America/Atikokan` UTC-5 ', function() {
        expect($.format.toTimeZone(jsonDate, 'dd/MM/yyyy hh:mm:ss a')).toEqual('18/12/2009 05:54:50 AM');
        expect($.format.toTimeZone(jsonDate, 'dd/MM/yyyy HH:mm:ss')).toEqual('18/12/2009 05:54:50');
    });

    it('toTimeZone `2009-12-18T10:54:50Z` `Asia/Kolkata` UTC+5:30 ', function() {
        expect($.format.toTimeZone(jsonDate, 'dd/MM/yyyy hh:mm:ss a')).toEqual('18/12/2009 04:24:50 PM');
        expect($.format.toTimeZone(jsonDate, 'dd/MM/yyyy HH:mm:ss')).toEqual('18/12/2009 16:24:50');
    });

    it('toTimeZone `2009-12-18T10:54:50Z` `Pacific/Kiritimati` UTC+14 ', function() {
        expect($.format.toTimeZone(jsonDate, 'dd/MM/yyyy hh:mm:ss a')).toEqual('19/12/2009 12:54:50 AM');
        expect($.format.toTimeZone(jsonDate, 'dd/MM/yyyy HH:mm:ss')).toEqual('19/12/2009 00:54:50');
    });

    it('toTimeZone `2009-12-18T10:54:50Z` ` Pacific/Niue` UTC-11 ', function() {
        expect($.format.toTimeZone(jsonDate, 'dd/MM/yyyy hh:mm:ss a')).toEqual('17/12/2009 11:54:50 PM');
        expect($.format.toTimeZone(jsonDate, 'dd/MM/yyyy HH:mm:ss')).toEqual('17/12/2009 23:54:50');
    });
});
