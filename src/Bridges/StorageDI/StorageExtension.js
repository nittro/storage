_context.invoke('Nittro.Extras.Storage.Bridges.StorageDI', function() {

    var StorageExtension = _context.extend('Nittro.DI.BuilderExtension', function(containerBuilder, config) {
        StorageExtension.Super.call(this, containerBuilder, config);
    }, {
        load: function () {
            var builder = this._getContainerBuilder();

            builder.addServiceDefinition('persistentStorage', 'Nittro.Extras.Storage.Storage(namespace: null, persistent: true)');
            builder.addServiceDefinition('sessionStorage', 'Nittro.Extras.Storage.Storage(namespace: null, persistent: false)');

        }
    });

    _context.register(StorageExtension, 'StorageExtension');

});
