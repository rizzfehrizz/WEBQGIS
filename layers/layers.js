ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([348439.136006, 9158542.714558, 423994.908739, 9208225.790921]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kecamatan_1 = new ol.format.GeoJSON();
var features_Kecamatan_1 = format_Kecamatan_1.readFeatures(json_Kecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Kecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_1.addFeatures(features_Kecamatan_1);
var lyr_Kecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_1, 
                style: style_Kecamatan_1,
                popuplayertitle: 'Kecamatan',
                interactive: true,
    title: 'Kecamatan<br />\
    <img src="styles/legend/Kecamatan_1_0.png" /> Garung<br />\
    <img src="styles/legend/Kecamatan_1_1.png" /> Kalibawang<br />\
    <img src="styles/legend/Kecamatan_1_2.png" /> Kalikajar<br />\
    <img src="styles/legend/Kecamatan_1_3.png" /> Kaliwiro<br />\
    <img src="styles/legend/Kecamatan_1_4.png" /> Kejajar<br />\
    <img src="styles/legend/Kecamatan_1_5.png" /> Kepil<br />\
    <img src="styles/legend/Kecamatan_1_6.png" /> Kertek<br />\
    <img src="styles/legend/Kecamatan_1_7.png" /> Leksono<br />\
    <img src="styles/legend/Kecamatan_1_8.png" /> Mojotengah<br />\
    <img src="styles/legend/Kecamatan_1_9.png" /> Sapuran<br />\
    <img src="styles/legend/Kecamatan_1_10.png" /> Selomerto<br />\
    <img src="styles/legend/Kecamatan_1_11.png" /> Sukoharjo<br />\
    <img src="styles/legend/Kecamatan_1_12.png" /> Wadaslintang<br />\
    <img src="styles/legend/Kecamatan_1_13.png" /> Watumalang<br />\
    <img src="styles/legend/Kecamatan_1_14.png" /> Wonosobo<br />' });
var format_PotensiLahanAgrowisata_2 = new ol.format.GeoJSON();
var features_PotensiLahanAgrowisata_2 = format_PotensiLahanAgrowisata_2.readFeatures(json_PotensiLahanAgrowisata_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PotensiLahanAgrowisata_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensiLahanAgrowisata_2.addFeatures(features_PotensiLahanAgrowisata_2);
var lyr_PotensiLahanAgrowisata_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PotensiLahanAgrowisata_2, 
                style: style_PotensiLahanAgrowisata_2,
                popuplayertitle: 'Potensi Lahan Agrowisata',
                interactive: true,
    title: 'Potensi Lahan Agrowisata<br />\
    <img src="styles/legend/PotensiLahanAgrowisata_2_0.png" /> Kelas 1<br />\
    <img src="styles/legend/PotensiLahanAgrowisata_2_1.png" /> Kelas 2<br />\
    <img src="styles/legend/PotensiLahanAgrowisata_2_2.png" /> Kelas 3<br />\
    <img src="styles/legend/PotensiLahanAgrowisata_2_3.png" /> Kelas 4<br />\
    <img src="styles/legend/PotensiLahanAgrowisata_2_4.png" /> Kelas 5<br />' });
var format_KesesuaianLahanKopiArabika_3 = new ol.format.GeoJSON();
var features_KesesuaianLahanKopiArabika_3 = format_KesesuaianLahanKopiArabika_3.readFeatures(json_KesesuaianLahanKopiArabika_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KesesuaianLahanKopiArabika_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KesesuaianLahanKopiArabika_3.addFeatures(features_KesesuaianLahanKopiArabika_3);
var lyr_KesesuaianLahanKopiArabika_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KesesuaianLahanKopiArabika_3, 
                style: style_KesesuaianLahanKopiArabika_3,
                popuplayertitle: 'Kesesuaian Lahan Kopi Arabika',
                interactive: true,
    title: 'Kesesuaian Lahan Kopi Arabika<br />\
    <img src="styles/legend/KesesuaianLahanKopiArabika_3_0.png" /> S1<br />\
    <img src="styles/legend/KesesuaianLahanKopiArabika_3_1.png" /> S2<br />\
    <img src="styles/legend/KesesuaianLahanKopiArabika_3_2.png" /> S3<br />\
    <img src="styles/legend/KesesuaianLahanKopiArabika_3_3.png" /> N<br />' });
var format_KesesuaianLahanCarica_4 = new ol.format.GeoJSON();
var features_KesesuaianLahanCarica_4 = format_KesesuaianLahanCarica_4.readFeatures(json_KesesuaianLahanCarica_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KesesuaianLahanCarica_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KesesuaianLahanCarica_4.addFeatures(features_KesesuaianLahanCarica_4);
var lyr_KesesuaianLahanCarica_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KesesuaianLahanCarica_4, 
                style: style_KesesuaianLahanCarica_4,
                popuplayertitle: 'Kesesuaian Lahan Carica',
                interactive: true,
    title: 'Kesesuaian Lahan Carica<br />\
    <img src="styles/legend/KesesuaianLahanCarica_4_0.png" /> S1<br />\
    <img src="styles/legend/KesesuaianLahanCarica_4_1.png" /> S2<br />\
    <img src="styles/legend/KesesuaianLahanCarica_4_2.png" /> S3<br />\
    <img src="styles/legend/KesesuaianLahanCarica_4_3.png" /> N<br />' });
var format_KesesuaianLahanDurian_5 = new ol.format.GeoJSON();
var features_KesesuaianLahanDurian_5 = format_KesesuaianLahanDurian_5.readFeatures(json_KesesuaianLahanDurian_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KesesuaianLahanDurian_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KesesuaianLahanDurian_5.addFeatures(features_KesesuaianLahanDurian_5);
var lyr_KesesuaianLahanDurian_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KesesuaianLahanDurian_5, 
                style: style_KesesuaianLahanDurian_5,
                popuplayertitle: 'Kesesuaian Lahan Durian',
                interactive: true,
    title: 'Kesesuaian Lahan Durian<br />\
    <img src="styles/legend/KesesuaianLahanDurian_5_0.png" /> S1<br />\
    <img src="styles/legend/KesesuaianLahanDurian_5_1.png" /> S2<br />\
    <img src="styles/legend/KesesuaianLahanDurian_5_2.png" /> S3<br />\
    <img src="styles/legend/KesesuaianLahanDurian_5_3.png" /> N<br />' });
var format_KesesuaianLahanKopiRobusta_6 = new ol.format.GeoJSON();
var features_KesesuaianLahanKopiRobusta_6 = format_KesesuaianLahanKopiRobusta_6.readFeatures(json_KesesuaianLahanKopiRobusta_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KesesuaianLahanKopiRobusta_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KesesuaianLahanKopiRobusta_6.addFeatures(features_KesesuaianLahanKopiRobusta_6);
var lyr_KesesuaianLahanKopiRobusta_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KesesuaianLahanKopiRobusta_6, 
                style: style_KesesuaianLahanKopiRobusta_6,
                popuplayertitle: 'Kesesuaian Lahan Kopi Robusta',
                interactive: true,
    title: 'Kesesuaian Lahan Kopi Robusta<br />\
    <img src="styles/legend/KesesuaianLahanKopiRobusta_6_0.png" /> S1<br />\
    <img src="styles/legend/KesesuaianLahanKopiRobusta_6_1.png" /> S2<br />\
    <img src="styles/legend/KesesuaianLahanKopiRobusta_6_2.png" /> S3<br />\
    <img src="styles/legend/KesesuaianLahanKopiRobusta_6_3.png" /> N<br />' });
var format_KesesuaianLahanTeh_7 = new ol.format.GeoJSON();
var features_KesesuaianLahanTeh_7 = format_KesesuaianLahanTeh_7.readFeatures(json_KesesuaianLahanTeh_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KesesuaianLahanTeh_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KesesuaianLahanTeh_7.addFeatures(features_KesesuaianLahanTeh_7);
var lyr_KesesuaianLahanTeh_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KesesuaianLahanTeh_7, 
                style: style_KesesuaianLahanTeh_7,
                popuplayertitle: 'Kesesuaian Lahan Teh',
                interactive: true,
    title: 'Kesesuaian Lahan Teh<br />\
    <img src="styles/legend/KesesuaianLahanTeh_7_0.png" /> S1<br />\
    <img src="styles/legend/KesesuaianLahanTeh_7_1.png" /> S2<br />\
    <img src="styles/legend/KesesuaianLahanTeh_7_2.png" /> S3<br />\
    <img src="styles/legend/KesesuaianLahanTeh_7_3.png" /> N<br />' });
var format_BatasKecamatan_8 = new ol.format.GeoJSON();
var features_BatasKecamatan_8 = format_BatasKecamatan_8.readFeatures(json_BatasKecamatan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_BatasKecamatan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_8.addFeatures(features_BatasKecamatan_8);
var lyr_BatasKecamatan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_8, 
                style: style_BatasKecamatan_8,
                popuplayertitle: 'Batas Kecamatan',
                interactive: false,
                title: '<img src="styles/legend/BatasKecamatan_8.png" /> Batas Kecamatan'
            });
var format_JaringanJalan_9 = new ol.format.GeoJSON();
var features_JaringanJalan_9 = format_JaringanJalan_9.readFeatures(json_JaringanJalan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JaringanJalan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_9.addFeatures(features_JaringanJalan_9);
var lyr_JaringanJalan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_9, 
                style: style_JaringanJalan_9,
                popuplayertitle: 'Jaringan Jalan',
                interactive: false,
    title: 'Jaringan Jalan<br />\
    <img src="styles/legend/JaringanJalan_9_0.png" /> Jalan Kolektor Primer Satu (JKP-1)<br />\
    <img src="styles/legend/JaringanJalan_9_1.png" /> Jalan Kolektor Primer Tiga (JKP-3)<br />\
    <img src="styles/legend/JaringanJalan_9_2.png" /> Jalan Lokal Primer<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Kecamatan_1.setVisible(true);lyr_PotensiLahanAgrowisata_2.setVisible(false);lyr_KesesuaianLahanKopiArabika_3.setVisible(false);lyr_KesesuaianLahanCarica_4.setVisible(false);lyr_KesesuaianLahanDurian_5.setVisible(false);lyr_KesesuaianLahanKopiRobusta_6.setVisible(false);lyr_KesesuaianLahanTeh_7.setVisible(false);lyr_BatasKecamatan_8.setVisible(true);lyr_JaringanJalan_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Kecamatan_1,lyr_PotensiLahanAgrowisata_2,lyr_KesesuaianLahanKopiArabika_3,lyr_KesesuaianLahanCarica_4,lyr_KesesuaianLahanDurian_5,lyr_KesesuaianLahanKopiRobusta_6,lyr_KesesuaianLahanTeh_7,lyr_BatasKecamatan_8,lyr_JaringanJalan_9];
lyr_Kecamatan_1.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'lbl_kec': 'lbl_kec', });
lyr_PotensiLahanAgrowisata_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'S_KM': 'S_KM', 'S_LS': 'S_LS', 'S_BJ': 'S_BJ', 'S_JL': 'S_JL', 'BS_HOTEL': 'BS_HOTEL', 'EROSI': 'EROSI', 'KEMUDAHAN': 'KEMUDAHAN', 'AIR': 'AIR', 'LIMBAH': 'LIMBAH', 'PONDASI': 'PONDASI', 'MORFO': 'MORFO', 'DRAINASE': 'DRAINASE', 'KEMAMPUAN': 'KEMAMPUAN', 'S_KL': 'S_KL', 'BS_RESTO': 'BS_RESTO', 'S_FK': 'S_FK', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'TSK': 'TSK', 'KET': 'KET', '9STURGES': '9STURGES', 'luas': 'luas', });
lyr_KesesuaianLahanKopiArabika_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DN': 'DN', 'BL_KRG': 'BL_KRG', 'CH_mm': 'CH_mm', 'KELERENGAN': 'KELERENGAN', 'SHC': 'SHC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'S_LR': 'S_LR', 'S_BK': 'S_BK', 'S_CH': 'S_CH', 'S_TG': 'S_TG', 'S_SH': 'S_SH', 'KS_ARAB': 'KS_ARAB', 'LsARB': 'LsARB', });
lyr_KesesuaianLahanCarica_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DRAINASE': 'DRAINASE', 'BL_KRG': 'BL_KRG', 'CH_mm': 'CH_mm', 'KELERENGAN': 'KELERENGAN', 'Drainase_1': 'Drainase_1', 'Tekstur': 'Tekstur', 'SHC': 'SHC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'S_SH': 'S_SH', 'S_BK': 'S_BK', 'S_LR': 'S_LR', 'S_TK': 'S_TK', 'S_CH': 'S_CH', 'S_DR': 'S_DR', 'KS_CRC': 'KS_CRC', 'lscrc': 'lscrc', });
lyr_KesesuaianLahanDurian_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DRAINASE': 'DRAINASE', 'BL_KRG': 'BL_KRG', 'CH_mm': 'CH_mm', 'KELERENGAN': 'KELERENGAN', 'Drainase_1': 'Drainase_1', 'Tekstur': 'Tekstur', 'SHC': 'SHC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'S_SH': 'S_SH', 'S_BK': 'S_BK', 'S_LR': 'S_LR', 'S_TK': 'S_TK', 'S_CH': 'S_CH', 'S_DR': 'S_DR', 'KS_CRC': 'KS_CRC', 'KS_DURIAN': 'KS_DURIAN', 'lsdr': 'lsdr', });
lyr_KesesuaianLahanKopiRobusta_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'DN': 'DN', 'BL_KRG': 'BL_KRG', 'CH_mm': 'CH_mm', 'KELERENGAN': 'KELERENGAN', 'SHC': 'SHC', 'Shape_Leng': 'Shape_Leng', 'S_SH': 'S_SH', 'S_CH': 'S_CH', 'S_BK': 'S_BK', 'S_TG': 'S_TG', 'S_LR': 'S_LR', 'KS_RBST': 'KS_RBST', 'KS2': 'KS2', 'KS3': 'KS3', 'LsRBS': 'LsRBS', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'new': 'new', 'luas': 'luas', });
lyr_KesesuaianLahanTeh_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'SHC': 'SHC', 'CH_mm': 'CH_mm', 'KELERENGAN': 'KELERENGAN', 'DN': 'DN', 'BL_KRG': 'BL_KRG', 'Shape_Leng': 'Shape_Leng', 'S_SH': 'S_SH', 'S_TG': 'S_TG', 'S_CH': 'S_CH', 'S_BK': 'S_BK', 'S_LR': 'S_LR', 'KS_TEH': 'KS_TEH', 'TEH2': 'TEH2', 'lsteh': 'lsteh', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_BatasKecamatan_8.set('fieldAliases', {'FID_WSB_KE': 'FID_WSB_KE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_JaringanJalan_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE1': 'ORDE1', 'ORDE2': 'ORDE2', 'ORDE3': 'ORDE3', 'ORDE4': 'ORDE4', 'JNSSSR': 'JNSSSR', 'JSJSSR': 'JSJSSR', 'STSJRN': 'STSJRN', 'SUMBER': 'SUMBER', 'KETOBJ': 'KETOBJ', 'Shape_Leng': 'Shape_Leng', 'buff': 'buff', });
lyr_Kecamatan_1.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'lbl_kec': 'TextEdit', });
lyr_PotensiLahanAgrowisata_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'S_KM': 'TextEdit', 'S_LS': 'TextEdit', 'S_BJ': 'TextEdit', 'S_JL': 'TextEdit', 'BS_HOTEL': 'TextEdit', 'EROSI': 'TextEdit', 'KEMUDAHAN': 'TextEdit', 'AIR': 'TextEdit', 'LIMBAH': 'TextEdit', 'PONDASI': 'TextEdit', 'MORFO': 'TextEdit', 'DRAINASE': 'TextEdit', 'KEMAMPUAN': 'TextEdit', 'S_KL': 'TextEdit', 'BS_RESTO': 'TextEdit', 'S_FK': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'TSK': 'TextEdit', 'KET': 'TextEdit', '9STURGES': 'TextEdit', 'luas': 'TextEdit', });
lyr_KesesuaianLahanKopiArabika_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'DN': 'TextEdit', 'BL_KRG': 'TextEdit', 'CH_mm': 'TextEdit', 'KELERENGAN': 'TextEdit', 'SHC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'S_LR': 'TextEdit', 'S_BK': 'TextEdit', 'S_CH': 'TextEdit', 'S_TG': 'TextEdit', 'S_SH': 'TextEdit', 'KS_ARAB': 'TextEdit', 'LsARB': 'TextEdit', });
lyr_KesesuaianLahanCarica_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'DRAINASE': 'TextEdit', 'BL_KRG': 'TextEdit', 'CH_mm': 'TextEdit', 'KELERENGAN': 'TextEdit', 'Drainase_1': 'TextEdit', 'Tekstur': 'TextEdit', 'SHC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'S_SH': 'TextEdit', 'S_BK': 'TextEdit', 'S_LR': 'TextEdit', 'S_TK': 'TextEdit', 'S_CH': 'TextEdit', 'S_DR': 'TextEdit', 'KS_CRC': 'TextEdit', 'lscrc': 'TextEdit', });
lyr_KesesuaianLahanDurian_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'DRAINASE': 'TextEdit', 'BL_KRG': 'TextEdit', 'CH_mm': 'TextEdit', 'KELERENGAN': 'TextEdit', 'Drainase_1': 'TextEdit', 'Tekstur': 'TextEdit', 'SHC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'S_SH': 'TextEdit', 'S_BK': 'TextEdit', 'S_LR': 'TextEdit', 'S_TK': 'TextEdit', 'S_CH': 'TextEdit', 'S_DR': 'TextEdit', 'KS_CRC': 'TextEdit', 'KS_DURIAN': 'TextEdit', 'lsdr': 'TextEdit', });
lyr_KesesuaianLahanKopiRobusta_6.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'DN': 'TextEdit', 'BL_KRG': 'TextEdit', 'CH_mm': 'TextEdit', 'KELERENGAN': 'TextEdit', 'SHC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'S_SH': 'TextEdit', 'S_CH': 'TextEdit', 'S_BK': 'TextEdit', 'S_TG': 'TextEdit', 'S_LR': 'TextEdit', 'KS_RBST': 'TextEdit', 'KS2': 'TextEdit', 'KS3': 'TextEdit', 'LsRBS': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'new': 'TextEdit', 'luas': 'TextEdit', });
lyr_KesesuaianLahanTeh_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'SHC': 'TextEdit', 'CH_mm': 'TextEdit', 'KELERENGAN': 'TextEdit', 'DN': 'TextEdit', 'BL_KRG': 'TextEdit', 'Shape_Leng': 'TextEdit', 'S_SH': 'TextEdit', 'S_TG': 'TextEdit', 'S_CH': 'TextEdit', 'S_BK': 'TextEdit', 'S_LR': 'TextEdit', 'KS_TEH': 'TextEdit', 'TEH2': 'TextEdit', 'lsteh': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BatasKecamatan_8.set('fieldImages', {'FID_WSB_KE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_JaringanJalan_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ORDE1': 'TextEdit', 'ORDE2': 'TextEdit', 'ORDE3': 'TextEdit', 'ORDE4': 'TextEdit', 'JNSSSR': 'TextEdit', 'JSJSSR': 'TextEdit', 'STSJRN': 'TextEdit', 'SUMBER': 'TextEdit', 'KETOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'buff': 'TextEdit', });
lyr_Kecamatan_1.set('fieldLabels', {'WADMKC': 'no label', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'lbl_kec': 'hidden field', });
lyr_PotensiLahanAgrowisata_2.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'S_KM': 'hidden field', 'S_LS': 'hidden field', 'S_BJ': 'hidden field', 'S_JL': 'hidden field', 'BS_HOTEL': 'hidden field', 'EROSI': 'hidden field', 'KEMUDAHAN': 'hidden field', 'AIR': 'hidden field', 'LIMBAH': 'hidden field', 'PONDASI': 'hidden field', 'MORFO': 'hidden field', 'DRAINASE': 'hidden field', 'KEMAMPUAN': 'hidden field', 'S_KL': 'hidden field', 'BS_RESTO': 'hidden field', 'S_FK': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'TSK': 'hidden field', 'KET': 'no label', '9STURGES': 'hidden field', 'luas': 'hidden field', });
lyr_KesesuaianLahanKopiArabika_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'DN': 'hidden field', 'BL_KRG': 'hidden field', 'CH_mm': 'hidden field', 'KELERENGAN': 'hidden field', 'SHC': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'S_LR': 'hidden field', 'S_BK': 'hidden field', 'S_CH': 'hidden field', 'S_TG': 'hidden field', 'S_SH': 'hidden field', 'KS_ARAB': 'no label', 'LsARB': 'hidden field', });
lyr_KesesuaianLahanCarica_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'DRAINASE': 'hidden field', 'BL_KRG': 'hidden field', 'CH_mm': 'hidden field', 'KELERENGAN': 'hidden field', 'Drainase_1': 'hidden field', 'Tekstur': 'hidden field', 'SHC': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'S_SH': 'hidden field', 'S_BK': 'hidden field', 'S_LR': 'hidden field', 'S_TK': 'hidden field', 'S_CH': 'hidden field', 'S_DR': 'hidden field', 'KS_CRC': 'no label', 'lscrc': 'hidden field', });
lyr_KesesuaianLahanDurian_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'DRAINASE': 'hidden field', 'BL_KRG': 'hidden field', 'CH_mm': 'hidden field', 'KELERENGAN': 'hidden field', 'Drainase_1': 'hidden field', 'Tekstur': 'hidden field', 'SHC': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'S_SH': 'hidden field', 'S_BK': 'hidden field', 'S_LR': 'hidden field', 'S_TK': 'hidden field', 'S_CH': 'hidden field', 'S_DR': 'hidden field', 'KS_CRC': 'hidden field', 'KS_DURIAN': 'no label', 'lsdr': 'hidden field', });
lyr_KesesuaianLahanKopiRobusta_6.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'OBJECTID': 'hidden field', 'DN': 'hidden field', 'BL_KRG': 'hidden field', 'CH_mm': 'hidden field', 'KELERENGAN': 'hidden field', 'SHC': 'hidden field', 'Shape_Leng': 'hidden field', 'S_SH': 'hidden field', 'S_CH': 'hidden field', 'S_BK': 'hidden field', 'S_TG': 'hidden field', 'S_LR': 'hidden field', 'KS_RBST': 'no label', 'KS2': 'hidden field', 'KS3': 'hidden field', 'LsRBS': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', 'new': 'hidden field', 'luas': 'hidden field', });
lyr_KesesuaianLahanTeh_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'OBJECTID_1': 'hidden field', 'SHC': 'hidden field', 'CH_mm': 'hidden field', 'KELERENGAN': 'hidden field', 'DN': 'hidden field', 'BL_KRG': 'hidden field', 'Shape_Leng': 'hidden field', 'S_SH': 'hidden field', 'S_TG': 'hidden field', 'S_CH': 'hidden field', 'S_BK': 'hidden field', 'S_LR': 'hidden field', 'KS_TEH': 'hidden field', 'TEH2': 'no label', 'lsteh': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_BatasKecamatan_8.set('fieldLabels', {'FID_WSB_KE': 'hidden field', 'WADMKC': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', });
lyr_JaringanJalan_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'ORDE1': 'hidden field', 'ORDE2': 'hidden field', 'ORDE3': 'hidden field', 'ORDE4': 'hidden field', 'JNSSSR': 'hidden field', 'JSJSSR': 'hidden field', 'STSJRN': 'hidden field', 'SUMBER': 'hidden field', 'KETOBJ': 'hidden field', 'Shape_Leng': 'hidden field', 'buff': 'hidden field', });
lyr_JaringanJalan_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});