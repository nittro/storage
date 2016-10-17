_context.invoke('Nittro.Storage.Bridges.StorageDI', function() {

    var StorageExtension = _context.extend('Nittro.DI.BuilderExtension', function(containerBuilder, config) {
        StorageExtension.Super.call(this, containerBuilder, config);
    }, {
        load: function () {
            var builder = this._getContainerBuilder();

            builder.addServiceDefinition('persistentStorage', 'Nittro.Storage.Storage(namespace: null, persistent: true)');
            builder.addServiceDefinition('sessionStorage', 'Nittro.Storage.Storage(namespace: null, persistent: false)');

        }
    });

    _context.register(StorageExtension, 'StorageExtension');

});
