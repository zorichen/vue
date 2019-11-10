<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <div class="form-inline">
                    <span>酒店名称：</span>
                    <input type="text" name="name" v-model="name">&nbsp&nbsp&nbsp
                    <input type="button" value="搜索" @click="search()">
                </div>
            </div>
            <div class="col-3">
                <input type="button" value="上一个" @click="before()">
                <input type="button" value="下一个" @click="after()">
            </div>
        </div>
        <div class="row" style="height:20px"></div>
        <div class="row">
            <div class="col-6">
                <h6> 正在查看第{{ count+1 }}间房...</h6>
                <h6> {{ hotels[count].name }}, {{ hotels[count].type }}, {{ hotels[count].size }}, {{ hotels[count].bed }}</h6>
                <h6> {{ hotels[count].hotel }}, {{ hotels[count].address }} </h6>
                
            </div>
            <div class="col-6">
                
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <iframe v-bind:src=hotels[count].url height="667px" width="375px"></iframe><br>
            </div>
            <div class="col-6">
                <img v-bind:src=hotels[count].img height="400px" width="670px" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0,
                hotel: {},
                filtered_hotels: [],
                hotels: [
                    { hotel:'茶田吾舍秘境特色度假酒店', address: '杭州市西湖区青芝坞125号', img: 'https://image.ructrip.com/ructrip/1564653465165/20190613-DSC_8003-HDR.jpg?imageView2/1/w/670/h/400', size: '30m²', bed: '1.8m', name: '墨屋101', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001965&houseTypeNo=601000002337' },
                    { hotel:'茶田吾舍秘境特色度假酒店', address: '杭州市西湖区青芝坞125号', img: 'https://image.ructrip.com/ructrip/1564653523277/20190613-DSC_8120.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.8m', name: '公屋102', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001965&houseTypeNo=601000002338' },
                    { hotel:'茶田吾舍秘境特色度假酒店', address: '杭州市西湖区青芝坞125号', img: 'https://image.ructrip.com/ructrip/1564653573730/20190613-DSC_8184.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.8m', name: '黑屋103', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001965&houseTypeNo=601000002339' },
                    { hotel:'茶田吾舍秘境特色度假酒店', address: '杭州市西湖区青芝坞125号', img: 'https://image.ructrip.com/ructrip/1564653619997/20190613-DSC_8234.jpg?imageView2/1/w/670/h/400', size: '30m²', bed: '1.8m', name: '幽默屋201', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001965&houseTypeNo=601000002340' },
                    { hotel:'茶田吾舍秘境特色度假酒店', address: '杭州市西湖区青芝坞125号', img: 'https://image.ructrip.com/ructrip/1564653678326/20190613-DSC_8321.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.8m', name: '失202', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001965&houseTypeNo=601000002341' },
                    { hotel:'茶田吾舍秘境特色度假酒店', address: '杭州市西湖区青芝坞125号', img: 'https://image.ructrip.com/ructrip/1564653708196/20190613-DSC_8285.jpg?imageView2/1/w/670/h/400', size: '30m²', bed: '1.8m', name: '阳台203', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001965&houseTypeNo=601000002342' },
                    { hotel:'茶田吾舍秘境特色度假酒店', address: '杭州市西湖区青芝坞125号', img: 'https://image.ructrip.com/ructrip/1564653751974/20190613-DSC_8391-HDR.jpg?imageView2/1/w/670/h/400', size: '30m²', bed: '1.8m', name: '帝屋301', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001965&houseTypeNo=601000002343' },
                    { hotel:'茶田吾舍秘境特色度假酒店', address: '杭州市西湖区青芝坞125号', img: 'https://image.ructrip.com/ructrip/1564653791493/20190702-ZYM_5104-HDR.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.8m', name: '地屋302', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001965&houseTypeNo=601000002344' },
                    { hotel:'茶田吾舍秘境特色度假酒店', address: '杭州市西湖区青芝坞125号', img: 'https://image.ructrip.com/ructrip/1564653842695/20190613-DSC_8421-HDR.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.8m', name: '玩具屋303', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001965&houseTypeNo=601000002345' },
                    { hotel:'青枝上特色度假酒店', address: '杭州市西湖区青芝坞151号', img: 'https://image.ructrip.com/ructrip/1565327509014/1.jpg?imageView2/1/w/670/h/400', size: '15m²', bed: '1.5m', name: '月影101', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002004&houseTypeNo=601000002437' },
                    { hotel:'青枝上特色度假酒店', address: '杭州市西湖区青芝坞151号', img: 'https://image.ructrip.com/ructrip/1565327594025/4.jpg?imageView2/1/w/670/h/400', size: '15m²', bed: '1.5m', name: '静夜102', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002004&houseTypeNo=601000002438' },
                    { hotel:'青枝上特色度假酒店', address: '杭州市西湖区青芝坞151号', img: 'https://image.ructrip.com/ructrip/1565327641767/1.jpg?imageView2/1/w/670/h/400', size: '15m²', bed: '1.5m', name: '蓝光103', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002004&houseTypeNo=601000002439' },
                    { hotel:'青枝上特色度假酒店', address: '杭州市西湖区青芝坞151号', img: 'https://image.ructrip.com/ructrip/1565327707257/1.jpg?imageView2/1/w/670/h/400', size: '28m²', bed: '1.8m', name: '法师201', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002004&houseTypeNo=601000002440' },
                    { hotel:'青枝上特色度假酒店', address: '杭州市西湖区青芝坞151号', img: 'https://image.ructrip.com/ructrip/1565327787937/1.jpg?imageView2/1/w/670/h/400', size: '30m²', bed: '1.35m', name: '彩虹202', type: '双人床', url: 'https://mall.ructrip.com/calendar?storeNo=401000002004&houseTypeNo=601000002441' },
                    { hotel:'青枝上特色度假酒店', address: '杭州市西湖区青芝坞151号', img: 'https://image.ructrip.com/ructrip/1565327859294/1.jpg?imageView2/1/w/670/h/400', size: '30m²', bed: '1.35m', name: '万象203', type: '双人床', url: 'https://mall.ructrip.com/calendar?storeNo=401000002004&houseTypeNo=601000002442' },
                    { hotel:'青枝上特色度假酒店', address: '杭州市西湖区青芝坞151号', img: 'https://image.ructrip.com/ructrip/1565327920207/1.jpg?imageView2/1/w/670/h/400', size: '17m²', bed: '1.5m', name: '玉露205', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002004&houseTypeNo=601000002443' },
                    { hotel:'青枝上特色度假酒店', address: '杭州市西湖区青芝坞151号', img: 'https://image.ructrip.com/ructrip/1565327998305/5.jpg?imageView2/1/w/670/h/400', size: '15m²', bed: '2.0m', name: '晚霞206', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002004&houseTypeNo=601000002444' },
                    { hotel:'青枝上特色度假酒店', address: '杭州市西湖区青芝坞151号', img: 'https://image.ructrip.com/ructrip/1565328068182/2.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.5m', name: '初恋301', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002004&houseTypeNo=601000002445' },
                    { hotel:'青枝上特色度假酒店', address: '杭州市西湖区青芝坞151号', img: 'https://image.ructrip.com/ructrip/1565328124183/1.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.8m', name: '东云302', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002004&houseTypeNo=601000002446' },
                    { hotel:'杭州凡舍设计师特色度假酒店', address: '杭州市西湖区上茅家埠135号', img: 'https://image.ructrip.com/ructrip/1570593215728/1.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.35m', name: '无尘', type: '双人床', url: 'https://mall.ructrip.com/calendar?storeNo=401000002235&houseTypeNo=601000003198' },
                    { hotel:'杭州凡舍设计师特色度假酒店', address: '杭州市西湖区上茅家埠135号', img: 'https://image.ructrip.com/ructrip/1570593464735/3.jpg?imageView2/1/w/670/h/400', size: '22m²', bed: '1.8m', name: '梵音', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002235&houseTypeNo=601000003199' },
                    { hotel:'杭州凡舍设计师特色度假酒店', address: '杭州市西湖区上茅家埠135号', img: 'https://image.ructrip.com/ructrip/1570593682142/1.jpg?imageView2/1/w/670/h/400', size: '22m²', bed: '1.8m', name: '实相', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002235&houseTypeNo=601000003200' },
                    { hotel:'杭州凡舍设计师特色度假酒店', address: '杭州市西湖区上茅家埠135号', img: 'https://image.ructrip.com/ructrip/1570598536959/2.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.8m', name: '于意', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002235&houseTypeNo=601000003201' },
                    { hotel:'杭州凡舍设计师特色度假酒店', address: '杭州市西湖区上茅家埠135号', img: 'https://image.ructrip.com/ructrip/1570599219190/1.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.8m', name: '当此时', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002235&houseTypeNo=601000003202' },
                    { hotel:'杭州凡舍设计师特色度假酒店', address: '杭州市西湖区上茅家埠135号', img: 'https://image.ructrip.com/ructrip/1570599410587/2.jpg?imageView2/1/w/670/h/400', size: '18m²', bed: '1.8m', name: '希有', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002235&houseTypeNo=601000003203' },
                    { hotel:'杭州凡舍设计师特色度假酒店', address: '杭州市西湖区上茅家埠135号', img: 'https://image.ructrip.com/ructrip/1570599642524/2.jpg?imageView2/1/w/670/h/400', size: '12m²', bed: '1.8m', name: '如是', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002235&houseTypeNo=601000003204' },
                    { hotel:'杭州凡舍设计师特色度假酒店', address: '杭州市西湖区上茅家埠135号', img: 'https://image.ructrip.com/ructrip/1570599954471/2.jpg?imageView2/1/w/670/h/400', size: '22m²', bed: '1.8m', name: '菩提', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002235&houseTypeNo=601000003205' },
                    { hotel:'杭州凡舍设计师特色度假酒店', address: '杭州市西湖区上茅家埠135号', img: 'https://image.ructrip.com/ructrip/1570600183957/3.jpg?imageView2/1/w/670/h/400', size: '18m²', bed: '1.5m', name: '云何', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002235&houseTypeNo=601000003206' },
                    { hotel:'陇上山居特色度假酒店', address: '杭州市西湖区上满觉陇杨家山22号', img: 'https://image.ructrip.com/ructrip/1560243438328/青玉1.jpg?imageView2/1/w/670/h/400', size: '23m²', bed: '1.8m', name: '青玉日式榻榻米', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001691&houseTypeNo=601000001608' },
                    { hotel:'陇上山居特色度假酒店', address: '杭州市西湖区上满觉陇杨家山22号', img: 'https://image.ructrip.com/ructrip/1560243827716/白玉1.jpg?imageView2/1/w/670/h/400', size: '21m²', bed: '1.5m', name: '白玉山景', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001691&houseTypeNo=601000001609' },
                    { hotel:'陇上山居特色度假酒店', address: '杭州市西湖区上满觉陇杨家山22号', img: 'https://image.ructrip.com/ructrip/1560244219178/碧玉2.jpg?imageView2/1/w/670/h/400', size: '24m²', bed: '1.3m', name: '碧玉山景', type: '双人床', url: 'https://mall.ructrip.com/calendar?storeNo=401000001691&houseTypeNo=601000001610' },
                    { hotel:'陇上山居特色度假酒店', address: '杭州市西湖区上满觉陇杨家山22号', img: 'https://image.ructrip.com/ructrip/1560244403709/WechatIMG1694.jpg?imageView2/1/w/670/h/400', size: '26m²', bed: '1.5m', name: '糖玉山景', type: '套房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001691&houseTypeNo=601000001611' },
                    { hotel:'陇上山居特色度假酒店', address: '杭州市西湖区上满觉陇杨家山22号', img: 'https://image.ructrip.com/ructrip/1560244534969/WechatIMG1691.jpg?imageView2/1/w/670/h/400', size: '38m²', bed: '1.8m', name: '墨玉山景露台', type: '亲子房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001691&houseTypeNo=601000001612' },
                    { hotel:'陇上山居特色度假酒店', address: '杭州市西湖区上满觉陇杨家山22号', img: 'https://image.ructrip.com/ructrip/1560245624669/黄玉4.jpg?imageView2/1/w/670/h/400', size: '26m²', bed: '1.8m', name: '黄玉庭院', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001691&houseTypeNo=601000001613' },
                    { hotel:'沐曦特色度假酒店', address: '杭州市西湖区下满觉陇152号', img: 'https://image.ructrip.com/ructrip/1570870423893/301头图.jpg?imageView2/1/w/670/h/400', size: '35m²', bed: '1.8m', name: '301聆·星空浪漫园床房', type: '套房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002260&houseTypeNo=601000003257' },
                    { hotel:'沐曦特色度假酒店', address: '杭州市西湖区下满觉陇152号', img: 'https://image.ructrip.com/ructrip/1570871030653/302房间.jpg?imageView2/1/w/670/h/400', size: '30m²', bed: '1.8m', name: '302悟·格调观景大床房', type: '套房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002260&houseTypeNo=601000003259' },
                    { hotel:'沐曦特色度假酒店', address: '杭州市西湖区下满觉陇152号', img: 'https://image.ructrip.com/ructrip/1570873569274/303床.jpg?imageView2/1/w/670/h/400', size: '35m²', bed: '1.8m', name: '303观·慵懒露台套房', type: '套房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002260&houseTypeNo=601000003260' },
                    { hotel:'沐曦特色度假酒店', address: '杭州市西湖区下满觉陇152号', img: 'https://image.ructrip.com/ructrip/1570871320191/201室内.jpg?imageView2/1/w/670/h/400', size: '30m²', bed: '1.8m', name: '201闻·悠想榻榻米房', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002260&houseTypeNo=601000003261' },
                    { hotel:'沐曦特色度假酒店', address: '杭州市西湖区下满觉陇152号', img: 'https://image.ructrip.com/ructrip/1570871519272/202床.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.8m', name: '202望·舒适观景大床房', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002260&houseTypeNo=601000003262' },
                    { hotel:'沐曦特色度假酒店', address: '杭州市西湖区下满觉陇152号', img: 'https://image.ructrip.com/ructrip/1570871819901/203房间.jpg?imageView2/1/w/670/h/400', size: '30m²', bed: '1.8m', name: '203念·温馨亲子双床房', type: '亲子房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002260&houseTypeNo=601000003263' },
                    { hotel:'沐曦特色度假酒店', address: '杭州市西湖区下满觉陇152号', img: 'https://image.ructrip.com/ructrip/1570871917007/101床.jpg?imageView2/1/w/670/h/400', size: '12m²', bed: '1.8m', name: '101晓·简约榻榻米房', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002260&houseTypeNo=601000003264' },
                    { hotel:'沐曦特色度假酒店', address: '杭州市西湖区下满觉陇152号', img: 'https://image.ructrip.com/ructrip/1570872011732/102房间.jpg?imageView2/1/w/670/h/400', size: '17m²', bed: '1.8m', name: '102觉·精致榻榻米房', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002260&houseTypeNo=601000003265' },
                    { hotel:'沐曦特色度假酒店', address: '杭州市西湖区下满觉陇152号', img: 'https://image.ructrip.com/ructrip/1570872081320/103头图.jpg?imageView2/1/w/670/h/400', size: '20m²', bed: '1.2m', name: '103盼·阳光双床房', type: '双人床', url: 'https://mall.ructrip.com/calendar?storeNo=401000002260&houseTypeNo=601000003266' },
                    { hotel:'满觉陇204旅居特色度假酒店', address: '杭州市西湖区下满觉陇204号', img: 'https://image.ructrip.com/ructrip/1564473589909/1.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.8m', name: '202', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001954&houseTypeNo=601000002268' },
                    { hotel:'满觉陇204旅居特色度假酒店', address: '杭州市西湖区下满觉陇204号', img: 'https://image.ructrip.com/ructrip/1564473714923/1.jpg?imageView2/1/w/670/h/400', size: '20m²', bed: '1.2m', name: '203', type: '双人床', url: 'https://mall.ructrip.com/calendar?storeNo=401000001954&houseTypeNo=601000002269' },
                    { hotel:'满觉陇204旅居特色度假酒店', address: '杭州市西湖区下满觉陇204号', img: 'https://image.ructrip.com/ructrip/1564473818128/1.jpg?imageView2/1/w/670/h/400', size: '15m²', bed: '1.5m', name: '204', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001954&houseTypeNo=601000002270' },
                    { hotel:'满觉陇204旅居特色度假酒店', address: '杭州市西湖区下满觉陇204号', img: 'https://image.ructrip.com/ructrip/1564473879665/2.jpg?imageView2/1/w/670/h/400', size: '21m²', bed: '1.5m', name: '205', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001954&houseTypeNo=601000002271' },
                    { hotel:'满觉陇204旅居特色度假酒店', address: '杭州市西湖区下满觉陇204号', img: 'https://image.ructrip.com/ructrip/1564473956671/1.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.8m', name: '206', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001954&houseTypeNo=601000002272' },
                    { hotel:'满觉陇204旅居特色度假酒店', address: '杭州市西湖区下满觉陇204号', img: 'https://image.ructrip.com/ructrip/1564474056185/1.jpg?imageView2/1/w/670/h/400', size: '15m²', bed: '1.5m', name: '307', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001954&houseTypeNo=601000002273' },
                    { hotel:'满觉陇204旅居特色度假酒店', address: '杭州市西湖区下满觉陇204号', img: 'https://image.ructrip.com/ructrip/1564474122579/1.jpg?imageView2/1/w/670/h/400', size: '30m²', bed: '1.8m', name: '308', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001954&houseTypeNo=601000002274' },
                    { hotel:'满觉陇204旅居特色度假酒店', address: '杭州市西湖区下满觉陇204号', img: 'https://image.ructrip.com/ructrip/1564474200434/1.jpg?imageView2/1/w/670/h/400', size: '15m²', bed: '1.5m', name: '309', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001954&houseTypeNo=601000002275' },
                    { hotel:'满觉陇204旅居特色度假酒店', address: '杭州市西湖区下满觉陇204号', img: 'https://image.ructrip.com/ructrip/1564474370393/1.jpg?imageView2/1/w/670/h/400', size: '37m²', bed: '1.8m', name: '310', type: '双人床', url: 'https://mall.ructrip.com/calendar?storeNo=401000001954&houseTypeNo=601000002276' },
                    { hotel:'千宿抱月亮的小熊特色度假酒店', address: '杭州市西湖区下满觉陇222号', img: 'https://image.ructrip.com/ructrip/1565763263305/4.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.8m', name: '远方山景大床房（红）', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002017&houseTypeNo=601000002476' },
                    { hotel:'千宿抱月亮的小熊特色度假酒店', address: '杭州市西湖区下满觉陇222号', img: 'https://image.ructrip.com/ructrip/1565763398714/3.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.8m', name: '远方山景大床房（黑）', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002017&houseTypeNo=601000002477' },
                    { hotel:'千宿抱月亮的小熊特色度假酒店', address: '杭州市西湖区下满觉陇222号', img: 'https://image.ructrip.com/ructrip/1568010355238/2.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.8m', name: '温暖奢华大床房（青）', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002017&houseTypeNo=601000002478' },
                    { hotel:'千宿抱月亮的小熊特色度假酒店', address: '杭州市西湖区下满觉陇222号', img: 'https://image.ructrip.com/ructrip/1565763570338/2.jpg?imageView2/1/w/670/h/400', size: '30m²', bed: '1.2m', name: '想你阳光双床房（蓝）', type: '双人床', url: 'https://mall.ructrip.com/calendar?storeNo=401000002017&houseTypeNo=601000002479' },
                    { hotel:'千宿抱月亮的小熊特色度假酒店', address: '杭州市西湖区下满觉陇222号', img: 'https://image.ructrip.com/ructrip/1565763649808/4.jpg?imageView2/1/w/670/h/400', size: '18m²', bed: '1.8m', name: '等待简约大床房（棕）', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002017&houseTypeNo=601000002480' },
                    { hotel:'至告茶酒伴特色度假酒店', address: '杭州市西湖区杨梅岭乾龙路33号', img: 'https://image.ructrip.com/niuba-admin/1558609868648/IMG_7346-副本.jpg?imageView2/1/w/670/h/400', size: '15m²', bed: '1.2m', name: '伴知故', type: '单人床', url: 'https://mall.ructrip.com/calendar?storeNo=401000001640&houseTypeNo=601000001310' },
                    { hotel:'至告茶酒伴特色度假酒店', address: '杭州市西湖区杨梅岭乾龙路33号', img: 'https://image.ructrip.com/niuba-admin/1558610094290/IMG_7364-副本.jpg?imageView2/1/w/670/h/400', size: '20m²', bed: '1.8m', name: '聚朋友', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001640&houseTypeNo=601000001311' },
                    { hotel:'至告茶酒伴特色度假酒店', address: '杭州市西湖区杨梅岭乾龙路33号', img: 'https://image.ructrip.com/niuba-admin/1558610223081/IMG_7373-副本.jpg?imageView2/1/w/670/h/400', size: '20m²', bed: '1.8m', name: '再回楼', type: ' 大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001640&houseTypeNo=601000001312' },
                    { hotel:'至告茶酒伴特色度假酒店', address: '杭州市西湖区杨梅岭乾龙路33号', img: 'https://image.ructrip.com/niuba-admin/1558610340914/IMG_7355-副本.jpg?imageView2/1/w/670/h/400', size: '30m²', bed: '1.8m', name: '茶飘香', type: '套房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001640&houseTypeNo=601000001313' },
                    { hotel:'至告茶酒伴特色度假酒店', address: '杭州市西湖区杨梅岭乾龙路33号', img: 'https://image.ructrip.com/niuba-admin/1558610465219/IMG_7332-副本.jpg?imageView2/1/w/670/h/400', size: '30m²', bed: '1.8m', name: '酒罢去', type: ' 套房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001640&houseTypeNo=601000001314' },
                    { hotel:'沐居特色度假酒店', address: '杭州市西湖区乾龙路48号', img: 'https://image.ructrip.com/ructrip/1560147577863/IMG_9367副本.jpg?imageView2/1/w/670/h/400', size: '20m²', bed: '1.8m', name: '一层标准', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001686&houseTypeNo=601000001577' },
                    { hotel:'沐居特色度假酒店', address: '杭州市西湖区乾龙路48号', img: 'https://image.ructrip.com/ructrip/1560147577863/IMG_9367副本.jpg?imageView2/1/w/670/h/400', size: '20m²', bed: '1.8m', name: '二层标准', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001686&houseTypeNo=601000001578' },
                    { hotel:'沐居特色度假酒店', address: '杭州市西湖区乾龙路48号', img: 'https://image.ructrip.com/ructrip/1560148298414/WechatIMG45.jpg?imageView2/1/w/670/h/400', size: '32m²', bed: '1.8m', name: '山景浴缸', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001686&houseTypeNo=601000001579' },
                    { hotel:'沐居特色度假酒店', address: '杭州市西湖区乾龙路48号', img: 'https://image.ructrip.com/ructrip/1560148551681/WechatIMG64.jpg?imageView2/1/w/670/h/400', size: '20m²', bed: '2.0m', name: '日式榻榻米', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001686&houseTypeNo=601000001580' },
                    { hotel:'沐居特色度假酒店', address: '杭州市西湖区乾龙路48号', img: 'https://image.ructrip.com/ructrip/1560149836131/IMG_8561副本.jpg?imageView2/1/w/670/h/400', size: '43m²', bed: '1.8m', name: '山景飘窗大床房', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001686&houseTypeNo=601000001581' },
                    { hotel:'沐居特色度假酒店', address: '杭州市西湖区乾龙路48号', img: 'https://image.ructrip.com/ructrip/1560149995784/WechatIMG38.jpg?imageView2/1/w/670/h/400', size: '43m²', bed: '1.8m', name: '山景落地窗大床房', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001686&houseTypeNo=601000001582' },
                    { hotel:'茗素溪舍特色度假酒店', address: '杭州市西湖区九溪徐村98号', img: 'https://image.ructrip.com/ructrip/1562204645974/pl3.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.8m', name: '恋潮（一楼）', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001779&houseTypeNo=601000001710' },
                    { hotel:'茗素溪舍特色度假酒店', address: '杭州市西湖区九溪徐村98号', img: 'https://image.ructrip.com/ructrip/1562207620631/10208.jpg?imageView2/1/w/670/h/400', size: '35m²', bed: '1.8m', name: '烟树（一楼）', type: '亲子房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001779&houseTypeNo=601000001717' },
                    { hotel:'茗素溪舍特色度假酒店', address: '杭州市西湖区九溪徐村98号', img: 'https://image.ructrip.com/ructrip/1562307991206/10305.jpg?imageView2/1/w/670/h/400', size: '30m²', bed: '1.8m', name: '竹海（一楼）', type: '亲子房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001779&houseTypeNo=601000001718' },
                    { hotel:'茗素溪舍特色度假酒店', address: '杭州市西湖区九溪徐村98号', img: 'https://image.ructrip.com/ructrip/1562208001357/pl22-HDR.jpg?imageView2/1/w/670/h/400', size: '45m²', bed: '1.8m', name: '赏茶', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001779&houseTypeNo=601000001719' },
                    { hotel:'茗素溪舍特色度假酒店', address: '杭州市西湖区九溪徐村98号', img: 'https://image.ructrip.com/ructrip/1562308385787/20202.jpg?imageView2/1/w/670/h/400', size: '20m²', bed: '1.8m', name: '研茶', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001779&houseTypeNo=601000001720' },
                    { hotel:'茗素溪舍特色度假酒店', address: '杭州市西湖区九溪徐村98号', img: 'https://image.ructrip.com/ructrip/1562208901059/pl74-HDR.jpg?imageView2/1/w/670/h/400', size: '40m²', bed: '1.8m', name: '问茶', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001779&houseTypeNo=601000001721' },
                    { hotel:'茗素溪舍特色度假酒店', address: '杭州市西湖区九溪徐村98号', img: 'https://image.ructrip.com/ructrip/1562209261385/pl78-HDR.jpg?imageView2/1/w/670/h/400', size: '40m²', bed: '1.8m', name: '禅茶', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001779&houseTypeNo=601000001722' },
                    { hotel:'茗素溪舍特色度假酒店', address: '杭州市西湖区九溪徐村98号', img: 'https://image.ructrip.com/ructrip/1562209405267/pl140-HDR.jpg?imageView2/1/w/670/h/400', size: '40m²', bed: '1.8m', name: '沏茶', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001779&houseTypeNo=601000001723' },
                    { hotel:'茗素溪舍特色度假酒店', address: '杭州市西湖区九溪徐村98号', img: 'https://image.ructrip.com/ructrip/1562209522656/20202.jpg?imageView2/1/w/670/h/400', size: '20m²', bed: '1.8m', name: '语茶', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000001779&houseTypeNo=601000001724' },
                    { hotel:'栖云·溪云特色度假酒店', address: '杭州市西湖区九溪徐村172号', img: 'https://image.ructrip.com/ructrip/1566795941768/2.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.8m', name: '精致大床房201', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002096&houseTypeNo=601000002693' },
                    { hotel:'栖云·溪云特色度假酒店', address: '杭州市西湖区九溪徐村172号', img: 'https://image.ructrip.com/ructrip/1566795941768/2.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.8m', name: '精致大床房202', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002096&houseTypeNo=601000002694' },
                    { hotel:'栖云·溪云特色度假酒店', address: '杭州市西湖区九溪徐村172号', img: 'https://image.ructrip.com/ructrip/1566796043531/1.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.8m', name: '精致榻榻米301', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002096&houseTypeNo=601000002695' },
                    { hotel:'栖云·溪云特色度假酒店', address: '杭州市西湖区九溪徐村172号', img: 'https://image.ructrip.com/ructrip/1566796043531/1.jpg?imageView2/1/w/670/h/400', size: '25m²', bed: '1.8m', name: '精致榻榻米302', type: '大床房', url: 'https://mall.ructrip.com/calendar?storeNo=401000002096&houseTypeNo=601000002696' }
                ]
            }
        },
        methods: {
            before() {
                this.count--
            },
            after() {
                this.count++
            },
            search(){
                
            }
        } 
    }
</script>

<style>
</style>