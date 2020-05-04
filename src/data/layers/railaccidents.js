export default {
  name: 'Zip Code Scores',

  visible: true,

  cartocss: `
  #layer {
    polygon-fill: ramp([standard_dd_000001], (#ffc6c4, #f4a3a8, #e38191, #cc607d, #ad466c, #8b3058, #672044), quantiles);
  }
  #layer::outline {
    line-width: 1;
    line-color: #FFFFFF;
    line-opacity: 0.5;
  }
  `,

  query: `
  SELECT * FROM mbforrcdb.mc_poc
  where zip5 in (10000,10001,10002,10003,10004,10005,10006,10007,10008,10009,10010,10011,10012,10013,10014,10015,10016,10017,10018,10019,10020,10021,10022,10023,10024,10025,10026,10027,10028,10029,10030,10031,10032,10033,10034,10035,10036,10037,10038,10039,10040,10041,10042,10043)`,

  options: {
    featureClickColumns: ['cartodb_id','the_geom','the_geom_webmercator','zip5','standard_dd_000001','standard_dd_000006','standard_dd_000008','standard_dd_000009','standard_dd_000013','standard_dd_000015','standard_dd_000021','standard_dd_000022','standard_dd_000023','standard_dd_000025','standard_dd_000028','standard_dd_000029','standard_dd_000030','standard_dd_000034','standard_dd_000036','standard_dd_000038','standard_dd_000039','standard_dd_000040','standard_dd_000041','standard_dd_000042','standard_dd_000045','standard_dd_000048','standard_dd_000049','standard_dd_000051','standard_dd_000054','standard_dd_000055','standard_dd_000056','standard_dd_000057','standard_dd_000058','standard_dd_000059','standard_dd_000060','standard_dd_000063','standard_dd_000064','standard_dd_000065','standard_dd_000066','standard_dd_000067','standard_dd_000071','standard_dd_000073','standard_dd_000074','standard_dd_000076','standard_dd_000077','standard_dd_000078','standard_dd_000079','standard_dd_000080','standard_dd_000081','standard_dd_000082','standard_dd_000083','standard_dd_000084','standard_dd_000085','standard_dd_000086','standard_dd_000087','standard_dd_000092','standard_dd_000093','standard_dd_000097','standard_dd_000098','standard_dd_000099','standard_dd_000101','standard_dd_000104','standard_dd_000105','standard_dd_000106','standard_dd_000110','standard_dd_000113','standard_dd_000118','standard_dd_000120','standard_dd_000121','standard_dd_000125','standard_dd_000126','standard_dd_000129','standard_dd_000138','standard_dd_000145','standard_dd_000146','standard_dd_000148','standard_dd_000149','standard_dd_000150','standard_dd_000154','standard_dd_000158','standard_dd_000159','standard_dd_000165','standard_dd_000166','standard_dd_000167','standard_dd_000168','standard_dd_000170','standard_dd_000174','standard_dd_000176','standard_dd_000177','standard_dd_000178','standard_dd_000182','standard_dd_000183','standard_dd_000184','standard_dd_000185','standard_dd_000186','standard_dd_000192','standard_dd_000193','standard_dd_000194','standard_dd_000195','standard_dd_000196','standard_dd_000198','standard_dd_000199','standard_dd_000225','standard_dd_000227','standard_dd_000228','standard_dd_000229','standard_dd_000230','standard_dd_000231','standard_dd_000232','standard_dd_000233','standard_dd_000234','standard_dd_000235','standard_dd_000236','standard_dd_000237','standard_dd_000238','standard_dd_000239','standard_dd_000240','standard_dd_000241','standard_dd_000242','standard_dd_000243','standard_dd_000244','standard_dd_000245','standard_dd_000246','standard_dd_000247','standard_dd_000248','standard_dd_000249','standard_dd_000250','standard_dd_000251','standard_dd_000252','standard_dd_000253','standard_dd_000254','standard_dd_000255','standard_dd_000256','standard_dd_000257','standard_dd_000258','standard_dd_000261','standard_dd_000262','standard_dd_000263','standard_dd_000264','standard_dd_000265','standard_dd_000267','standard_dd_000268','standard_dd_000269','standard_dd_000270','standard_dd_000272','standard_dd_000274','standard_dd_000275','standard_dd_000276','standard_dd_000277','standard_dd_000278','standard_dd_000279','standard_dd_000280','standard_dd_000281','standard_dd_000282','standard_dd_000283','standard_dd_000284','standard_dd_000285','standard_dd_000286','standard_dd_000287','standard_dd_000288','standard_dd_000289','standard_dd_000290','standard_dd_000291','standard_dd_000292','standard_dd_000293','standard_dd_000294','standard_dd_000295','standard_dd_000296','standard_dd_000297','standard_dd_000298','standard_dd_000299','standard_dd_000300','standard_dd_000301','standard_dd_000302','standard_dd_000303','standard_dd_000304','standard_dd_000305','standard_dd_000306','standard_dd_000307','standard_dd_000308','standard_dd_000309','standard_dd_000310','standard_dd_000311','standard_dd_000312','standard_dd_000313','standard_dd_000314','standard_dd_000315','standard_dd_000339','standard_dd_000340','standard_dd_000352','standard_dd_000353','standard_dd_000354','standard_dd_000355','standard_dd_000356','standard_dd_000357','standard_dd_000358','standard_dd_000359','standard_dd_000360','standard_dd_000361','standard_dd_000362','standard_dd_000363','standard_dd_000364','standard_dd_000365','standard_dd_000366','standard_dd_000367','standard_dd_000368','standard_dd_000369','standard_dd_000370','standard_dd_000371','standard_dd_000372','standard_dd_000373','standard_dd_000374','standard_dd_000375','standard_dd_000376','standard_dd_000389','standard_dd_000390','standard_dd_000391','standard_dd_000392','standard_dd_000393','standard_dd_000394','standard_dd_000395','standard_dd_000396','standard_dd_000397','standard_dd_000398','standard_dd_000399','standard_dd_000400','standard_dd_000401','standard_dd_000402','standard_dd_000403','standard_dd_000404','standard_dd_000405','standard_dd_000406','standard_dd_000408','standard_dd_000410','standard_dd_000411','standard_dd_000412','standard_dd_000413','season_dd_000001','season_dd_000003','season_dd_000004','season_dd_000005','season_dd_000007','season_dd_000008','season_dd_000009','season_dd_000011','season_dd_000012','season_dd_000015','season_dd_000016','season_dd_000019','season_dd_000020','season_dd_000021','season_dd_000022','season_dd_000023','season_dd_000024','season_dd_000025','season_dd_000026','season_dd_000027','season_dd_000028','season_dd_000029','season_dd_000030','season_dd_000033','season_dd_000034','season_dd_000035','season_dd_000036','season_dd_000038','season_dd_000039','season_dd_000042','season_dd_000043','season_dd_000044','season_dd_000046','season_dd_000050','season_dd_000055','season_dd_000056','season_dd_000057','season_dd_000058','season_dd_000059','season_dd_000060','season_dd_000062','season_dd_000063','season_dd_000064','season_dd_000065','season_dd_000066','season_dd_000067','season_dd_000068']
  }
};