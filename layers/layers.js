var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MicroRegiones2020Actualizada_1 = new ol.format.GeoJSON();
var features_MicroRegiones2020Actualizada_1 = format_MicroRegiones2020Actualizada_1.readFeatures(json_MicroRegiones2020Actualizada_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroRegiones2020Actualizada_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroRegiones2020Actualizada_1.addFeatures(features_MicroRegiones2020Actualizada_1);
var lyr_MicroRegiones2020Actualizada_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroRegiones2020Actualizada_1, 
                style: style_MicroRegiones2020Actualizada_1,
                interactive: true,
                title: '<img src="styles/legend/MicroRegiones2020Actualizada_1.png" /> MicroRegiones2020Actualizada'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MicroRegiones2020Actualizada_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MicroRegiones2020Actualizada_1];
lyr_MicroRegiones2020Actualizada_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'ClaveMuni': 'ClaveMuni', 'Region': 'Region', 'Micro': 'Micro', 'Muni': 'Muni', 'Coord': 'Coord', 'Analfabeta': 'Analfabeta', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_MicroRegiones2020Actualizada_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'ClaveMuni': 'TextEdit', 'Region': 'TextEdit', 'Micro': 'TextEdit', 'Muni': 'TextEdit', 'Coord': 'TextEdit', 'Analfabeta': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_MicroRegiones2020Actualizada_1.set('fieldLabels', {'OBJECTID': 'no label', 'cat': 'no label', 'ClaveMuni': 'no label', 'Region': 'no label', 'Micro': 'header label', 'Muni': 'no label', 'Coord': 'no label', 'Analfabeta': 'no label', 'PrimIncom': 'no label', 'PrimComp': 'no label', 'SecuComp': 'no label', 'Rezago': 'no label', });
lyr_MicroRegiones2020Actualizada_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});