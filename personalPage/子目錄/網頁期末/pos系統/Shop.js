const Shop = {
  name: '激氮一下',
  address: '金門縣金寧鄉安美村湖南 33 號',
  tel: '082-333333',
  items: {'紅茶':20, '綠茶': 20, '珍珠奶茶': 35,'咖啡':50 },
  addons: {'去冰':0, '正常冰':0,'微冰':0, '熱':0},
  addsitem: {'無':0,'粉圓':5, '椰果':5, '牛奶':10},
  sugar: {'正常':0,'8分':0, '5分':0, '3分':0,'無':0},
  orderCount: 0,
}

Shop.html = `
<div>
  <button class="big" onclick="Pos.start()">新增訂單</button><br/><br/>
  <button class="big" onclick="Report.start()">本日報表</button><br/><br/>
  <button class="big" onclick="Setting.start()">商店設定</button><br/><br/>
</div>
`

Shop.start = function () {
  Shop.init()
  Shop.name = localStorage.getItem('Shop.name') || Shop.name
  Shop.address = localStorage.getItem('Shop.address') || Shop.address
  Shop.tel = localStorage.getItem('Shop.tel') || Shop.tel
  Ui.id('menuShopName').innerHTML = Shop.name
  const itemsJson = localStorage.getItem('Shop.items')
  const addonsJson = localStorage.getItem('Shop.addons')
  const addsitemJson = localStorage.getItem('Shop.addsitem')
  const sugarJson = localStorage.getItem('Shop.sugar')


  if (itemsJson != null) Shop.items = JSON.parse(itemsJson)
  if (addonsJson != null) Shop.addons = JSON.parse(addonsJson)
  if (addsitemJson != null) Shop.addsitem = JSON.parse(addsitemJson)
  if (sugarJson != null) Shop.sugar = JSON.parse(sugarJson)
  Ui.show(Shop.html)
}

Shop.init = function () {
  Shop.orderCount = localStorage.getItem('Pos.Order.count')
  if (Shop.orderCount == null) {
    Shop.orderCount = 0
    localStorage.setItem('Pos.Order.count', Shop.orderCount)
  }
}

Shop.incCount = function () {
  // let orderCount = parseInt(localStorage.getItem('Pos.Order.count')) + 1
  localStorage.setItem('Pos.Order.count', ++ Shop.orderCount)
}

Shop.saveOrder = function (Order) {
  localStorage.setItem('Pos.Order.' + Shop.orderCount, JSON.stringify(Order))
}

Shop.getOrder = function (i) {
  let orderJson = localStorage.getItem('Pos.Order.'+i)
  if (orderJson == null) return null
  return JSON.parse(orderJson)
}
