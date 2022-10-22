const Jadwal = [
    {
        jadwal_id : 1,
        bandara_kode_keberangkatan : 'CGK',
        bandara_kode_tujuan : 'DJB',
        maskapai_id :'BTK'
    },
    {
        jadwal_id : 2,
        bandara_kode_keberangkatan : 'DJB',
        bandara_kode_tujuan : 'BDO',
        maskapai_id :'GIA'
    },
    {
        jadwal_id : 3,
        bandara_kode_keberangkatan : 'BDO',
        bandara_kode_tujuan : 'DPS',
        maskapai_id : 'AXM',
    },
    {
        jadwal_id : 4,
        bandara_kode_keberangkatan : 'DPS',
        bandara_kode_tujuan : 'TKG',
        maskapai_id : 'SJY'
    },
    {
        jadwal_id : 5, 
        bandara_kode_keberangkatan : 'TKG',
        bandara_kode_tujuan : 'CGK',
        maskapai_id : 'LNI'
    },
];

const Maskapai = {
    GIA :{
        maskapai_id:'GIA',
        maskapai_nama:'Garuda Indonesia',
        maskapai_logo:'Garuda Indonesia'
    },
    LNI :{
        maskapai_id:'LNI',
        maskapai_nama:'Lion Air',
        maskapai_logo:'Lion Air'
    },
    SJY :{
        maskapai_id:'SJY',
        maskapai_nama:'Sriwijaya Air',
        maskapai_logo:'Sriwijaya Air'
    },
    BTK :{
        maskapai_id:'BTK',
        maskapai_nama:'Batik Air',
        maskapai_logo:'Batik Air'
    },
    AXM :{
        maskapai_id:'AXM',
        maskapai_nama:'Air Asia',
        maskapai_logo:'Air Asia'
    }
};
const Bandara = {
    DJB : {
        bandara_kode : 'DJB',
        bandara_nama : 'Bandar Udara Sultan Thaha'
    },
    CGK : {
        bandara_kode : 'CGK',
        bandara_nama : 'Bandar Udara Internasional Soekarno–Hatta'
    },
    BDO : {
        bandara_kode : 'BDO',
        bandara_nama : 'Bandar Udara Internasional Husein Sastranegara'
    },
    DPS : {
        bandara_kode : 'DPS',
        bandara_nama : 'Bandar Udara Internasional Ngurah Rai '
    },
    TKG : {
        bandara_kode : 'TKG',
        bandara_nama : 'Bandar Udara Internasional Radin Inten II'
    },
    SUB : {
        bandara_kode : 'SUB',
        bandara_nama : 'Bandar Udara Internasional Juanda'
    }
}

