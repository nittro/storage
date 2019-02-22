_context.invoke('Nittro.Extras.Storage', function () {

    var DummyStorage = _context.extend(function() {
        this._ = {
            keys: [],
            values: []
        };
    }, {
        key: function(index) {
            return this._.keys[index] || null;
        },

        getItem: function(key) {
            var idx = this._.keys.indexOf(key);
            return idx > -1 ? this._.values[idx] : null;
        },

        setItem: function(key, value) {
            var idx = this._.keys.indexOf(key);

            if (idx > -1) {
                this._.values[idx] = value;
            } else {
                this._.keys.push(key);
                this._.values.push(value);
            }
        },

        removeItem: function(key) {
            var idx = this._.keys.indexOf(key);

            if (idx > -1) {
                this._.keys.splice(idx, 1);
                this._.values.splice(idx, 1);
            }
        },

        clear: function() {
            this._.keys = [];
            this._.values = [];
        }
    });

    _context.register(DummyStorage, 'DummyStorage');

});
