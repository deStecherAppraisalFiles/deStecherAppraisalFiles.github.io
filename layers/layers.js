ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:2953").setExtent([2573337.666431, 7411495.065963, 2582265.049564, 7416835.136764]);
var wms_layers = [];


        var lyr_googlemaps_0 = new ol.layer.Tile({
            'title': 'google maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIImagery_1 = new ol.layer.Tile({
            'title': 'ESRI Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_FloodLines_2 = new ol.format.GeoJSON();
var features_FloodLines_2 = format_FloodLines_2.readFeatures(json_FloodLines_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2953'});
var jsonSource_FloodLines_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FloodLines_2.addFeatures(features_FloodLines_2);
var lyr_FloodLines_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FloodLines_2, 
                style: style_FloodLines_2,
                interactive: true,
                title: 'Flood Lines'
            });
var format_TownofSussexBoundaries_3 = new ol.format.GeoJSON();
var features_TownofSussexBoundaries_3 = format_TownofSussexBoundaries_3.readFeatures(json_TownofSussexBoundaries_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2953'});
var jsonSource_TownofSussexBoundaries_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TownofSussexBoundaries_3.addFeatures(features_TownofSussexBoundaries_3);
var lyr_TownofSussexBoundaries_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TownofSussexBoundaries_3, 
                style: style_TownofSussexBoundaries_3,
                interactive: false,
                title: '<img src="styles/legend/TownofSussexBoundaries_3.png" /> Town of Sussex Boundaries'
            });
var format_RelatedSites_4 = new ol.format.GeoJSON();
var features_RelatedSites_4 = format_RelatedSites_4.readFeatures(json_RelatedSites_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2953'});
var jsonSource_RelatedSites_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RelatedSites_4.addFeatures(features_RelatedSites_4);
var lyr_RelatedSites_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RelatedSites_4, 
                style: style_RelatedSites_4,
                interactive: false,
                title: '<img src="styles/legend/RelatedSites_4.png" /> Related Sites'
            });
var format_Structures_5 = new ol.format.GeoJSON();
var features_Structures_5 = format_Structures_5.readFeatures(json_Structures_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2953'});
var jsonSource_Structures_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Structures_5.addFeatures(features_Structures_5);
var lyr_Structures_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Structures_5, 
                style: style_Structures_5,
                interactive: true,
                title: '<img src="styles/legend/Structures_5.png" /> Structures'
            });

lyr_googlemaps_0.setVisible(false);lyr_ESRIImagery_1.setVisible(true);lyr_FloodLines_2.setVisible(true);lyr_TownofSussexBoundaries_3.setVisible(true);lyr_RelatedSites_4.setVisible(true);lyr_Structures_5.setVisible(true);
var layersList = [lyr_googlemaps_0,lyr_ESRIImagery_1,lyr_FloodLines_2,lyr_TownofSussexBoundaries_3,lyr_RelatedSites_4,lyr_Structures_5];
lyr_FloodLines_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'POL_KEY': 'POL_KEY', 'DESCR': 'DESCR', });
lyr_TownofSussexBoundaries_3.set('fieldAliases', {'Type': 'Type', 'DATE': 'DATE', 'ID': 'ID', 'OFFICIAL_E': 'OFFICIAL_E', 'OFFICIAL_F': 'OFFICIAL_F', 'Name': 'Name', 'Comm_Name': 'Comm_Name', 'Type_Name': 'Type_Name', 'Length': 'Length', 'Area': 'Area', });
lyr_RelatedSites_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Structures_5.set('fieldAliases', {'Item Num': 'Item Num', });
lyr_FloodLines_2.set('fieldImages', {'OBJECTID': '', 'POL_KEY': 'TextEdit', 'DESCR': 'TextEdit', });
lyr_TownofSussexBoundaries_3.set('fieldImages', {'Type': '', 'DATE': '', 'ID': '', 'OFFICIAL_E': '', 'OFFICIAL_F': '', 'Name': '', 'Comm_Name': '', 'Type_Name': '', 'Length': '', 'Area': '', });
lyr_RelatedSites_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Structures_5.set('fieldImages', {'Item Num': 'TextEdit', });
lyr_FloodLines_2.set('fieldLabels', {'OBJECTID': 'inline label', 'POL_KEY': 'inline label', 'DESCR': 'header label', });
lyr_TownofSussexBoundaries_3.set('fieldLabels', {'Type': 'no label', 'DATE': 'no label', 'ID': 'no label', 'OFFICIAL_E': 'no label', 'OFFICIAL_F': 'no label', 'Name': 'no label', 'Comm_Name': 'no label', 'Type_Name': 'no label', 'Length': 'no label', 'Area': 'no label', });
lyr_RelatedSites_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Structures_5.set('fieldLabels', {'Item Num': 'no label', });
lyr_Structures_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});