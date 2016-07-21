_context.invoke('Nittro.Storage.Bridges', function(Nittro) {

    if (!Nittro.DI) {
        return;
    }

    var StorageDI = _context.extend('Nittro.DI.BuilderExtension', function(containerBuilder, config) {
        StorageDI.Super.call(this, containerBuilder, config);
    }, {
        load: function () {
            var builder = this._getContainerBuilder();

            builder.addServiceDefinition('persistentStorage', 'Nittro.Storage.Storage(namespace: null, persistent: true)');
            builder.addServiceDefinition('sessionStorage', 'Nittro.Storage.Storage(namespace: null, persistent: false)');

        }
    });

    _context.register(StorageDI, 'StorageDI');
    
});
