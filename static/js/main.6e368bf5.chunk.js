(this["webpackJsonp@pancakeswap/interface"] =
	this["webpackJsonp@pancakeswap/interface"] || []).push([
	[2],
	{
		122: function (e) {
			e.exports = JSON.parse(
				'[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'
			);
		},
		150: function (e) {
			e.exports = JSON.parse(
//Addresse Kebab to be replaced				
				'{"name":"camelswap","timestamp":"2020-08-25T15:41:29.665Z","version":{"major":1,"minor":3,"patch":2},"tags":{},"logoURI":"/images/coins/wbnb.png","keywords":["pancake","default"],"tokens":[{"name":"WBNB Token","symbol":"WBNB","address":"0xae13d989dac2f0debff460ac112a837c89baa7cd","chainId":97,"decimals":18,"logoURI":"/images/coins/BUSD.png"},{"name":"WBNB Token","symbol":"WBNB","address":"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c","chainId":56,"decimals":18},{"name":"LP3 Token","symbol":"LP3","address":"0xe70b7523f4bffa1f2e88d2ba709afd026030f412","chainId":97,"decimals":18,"logoURI":"/images/coins/ETH.png"},{"name":"BUSD Token","symbol":"BUSD","address":"0x615446C0Fd5eA8A5FD7fb763f3FC2C58774474F3","chainId":97,"decimals":18,"logoURI":"/images/coins/BTC.png"},{"name":"Bakery Token","symbol":"BAKE","address":"0xe02df9e3e622debdd69fb838bb799e3f168902c5","chainId":56,"decimals":18,"logoURI":"/images/coins/bake.png"},{"name":"BUSD Token","symbol":"BUSD","address":"0xe9e7cea3dedca5984780bafc599bd69add087d56","chainId":56,"decimals":18,"logoURI":"/images/coins/BUSD.png"},{"name":"Ethereum Token","symbol":"ETH","address":"0x2170ed0880ac9a755fd29b2688956bd959f933f8","chainId":56,"decimals":18,"logoURI":"/images/coins/ETH.png"},{"name":"BTCB Token","symbol":"BTCB","address":"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c","chainId":56,"decimals":18,"logoURI":"/images/coins/BTC-icon.png"},{"name":"BAND Protocol Token","symbol":"BAND","address":"0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18","chainId":56,"decimals":18,"logoURI":"/images/coins/band.png"},{"name":"EOS Token","symbol":"EOS","address":"0x56b6fb708fc5732dec1afc8d8556423a2edccbd6","chainId":56,"decimals":18,"logoURI":"/images/coins/eos.png"},{"name":"Tether USD","symbol":"USDT","address":"0x55d398326f99059ff775485246999027b3197955","chainId":56,"decimals":18,"logoURI":"/images/coins/USDT-icon.png"},{"name":"XRP Token","symbol":"XRP","address":"0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe","chainId":56,"decimals":18,"logoURI":"/images/coins/XRP-icon.png"},{"name":"Bitcoin Cash Token","symbol":"BCH","address":"0x8ff795a6f4d97e7887c79bea79aba5cc76444adf","chainId":56,"decimals":18,"logoURI":"/images/coins/BCH-icon.png"},{"name":"Litecoin Token","symbol":"LTC","address":"0x4338665cbb7b2485a8855a139b75d5e34ab0db94","chainId":56,"decimals":18,"logoURI":"/images/coins/LTC-icon.png"},{"name":"Cardano Token","symbol":"ADA","address":"0x3ee2200efb3400fabb9aacf31297cbdd1d435d47","chainId":56,"decimals":18},{"name":"Cosmos Token","symbol":"ATOM","address":"0x0eb3a705fc54725037cc9e008bdede697f62f335","chainId":56,"decimals":18},{"name":"Tezos Token","symbol":"XTZ","address":"0x16939ef78684453bfdfb47825f8a5f714f12623a","chainId":56,"decimals":18},{"name":"Ontology Token","symbol":"ONT","address":"0xfd7b3a77848f1c2d67e05e54d78d174a0c850335","chainId":56,"decimals":18},{"name":"Zcash Token","symbol":"ZEC","address":"0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb","chainId":56,"decimals":18},{"name":"Dai Token","symbol":"DAI","address":"0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3","chainId":56,"decimals":18,"logoURI":"/images/coins/DAI-icon.png"},{"name":"YFII.finance Token","symbol":"YFII","address":"0x7f70642d88cf1c4a3a7abb072b53b929b653eda5","chainId":56,"decimals":18},{"name":"Cream","symbol":"CREAM","address":"0xd4cb328a82bdf5f03eb737f37fa6b370aef3e888","chainId":56,"decimals":18},{"name":"Prometeus","symbol":"PROM","address":"0xaf53d56ff99f1322515e54fdde93ff8b3b7dafd5","chainId":56,"decimals":18},{"name":"CanYaCoin","symbol":"CAN","address":"0x007ea5c0ea75a8df45d288a4debdd5bb633f9e56","chainId":56,"decimals":18},{"name":"Polkadot Token","symbol":"DOT","address":"0x7083609fce4d1d8dc0c979aab8c869ea2c873402","chainId":56,"decimals":18},{"name":"PancakeSwap Token","symbol":"CAKE","address":"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","chainId":56,"decimals":18},{"name":"Streamity","symbol":"STM","address":"0x90df11a8cce420675e73922419e3f4f3fe13cccb","chainId":56,"decimals":18},{"name":"Ankr","symbol":"ANKR","address":"0xf307910a4c7bbc79691fd374889b36d8531b08e3","chainId":56,"decimals":18},{"name":"ChainLink Token","symbol":"LINK","address":"0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd","chainId":56,"decimals":18},{"name":"Burger Swap","symbol":"BURGER","address":"0xae9269f27437f0fcbc232d39ec814844a51d6b8f","chainId":56,"decimals":18},{"name":"Dice.finance Token","symbol":"DICE","address":"0x748ad98b14c814b28812eb42ad219c8672909879","chainId":56,"decimals":18},{"name":"JNTR/b","symbol":"JNTR/b","address":"0x3c037c4c2296f280bb318d725d0b454b76c199b9","chainId":56,"decimals":18},{"name":"SPARTAN PROTOCOL TOKEN","symbol":"SPART","address":"0xe4ae305ebe1abe663f261bc00534067c80ad677c","chainId":56,"decimals":18},{"name":"Trust Wallet","symbol":"TWT","address":"0x4b0f1812e5df2a09796481ff14017e6005508003","chainId":56,"decimals":18},{"name":"Venus","symbol":"XVS","address":"0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63","chainId":56,"decimals":18},{"name":"Beer Garden","symbol":"Beer","address":"0xbb8db5e17bbe9c90da8e3445e335b82d7cc53575","chainId":56,"decimals":18},{"name":"AlphaToken","symbol":"ALPHA","address":"0xa1faa113cbe53436df28ff0aee54275c13b40975","chainId":56,"decimals":18},{"name":"Beefy.finance","symbol":"BIFI","address":"0xCa3F508B8e4Dd382eE878A314789373D80A5190A","chainId":56,"decimals":18},{"name":"yearn.finance","symbol":"YFI","address":"0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e","chainId":56,"decimals":18},{"name":"Uniswap","symbol":"UNI","address":"0xbf5140a22578168fd562dccf235e5d43a02ce9b1","chainId":56,"decimals":18},{"name":"fry.world","symbol":"FRIES","address":"0x393B312C01048b3ed2720bF1B090084C09e408A1","chainId":56,"decimals":18},{"name":"StableXSwap","symbol":"STAX","address":"0x0da6ed8b13214ff28e9ca979dd37439e8a88f6c4","chainId":56,"decimals":18,"logoURI":"/images/coins/STAX.png"},{"name":"Filecoin","symbol":"FIL","address":"0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153","chainId":56,"decimals":18},{"name":"KAVA","symbol":"KAVA","address":"0x5F88AB06e8dfe89DF127B2430Bba4Af600866035","chainId":56,"decimals":6},{"name":"USDX","symbol":"USDX","address":"0x1203355742e76875154c0d13eb81dcd7711dc7d9","chainId":56,"decimals":6},{"name":"Injective Protocol","symbol":"INJ","address":"0xa2B726B1145A4773F68593CF171187d8EBe4d495","chainId":56,"decimals":18},{"name":"Swipe","symbol":"SXP","address":"0x47bead2563dcbf3bf2c9407fea4dc236faba485a","chainId":56,"decimals":18},{"name":"Binance-Peg USD Coin","symbol":"USDC","address":"0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d","chainId":56,"decimals":18},{"name":"CertiK Token","symbol":"CTK","address":"0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929","chainId":56,"decimals":6},{"name":"NAR Token","symbol":"NAR","address":"0xa1303e6199b319a891b79685f0537d289af1fc83","chainId":56,"decimals":18},{"name":"Nyanswop Token","symbol":"NYA","address":"0xbfa0841f7a90c4ce6643f651756ee340991f99d5","chainId":56,"decimals":18},{"name":"DANGO","symbol":"DANGO","address":"0x0957c57c9eb7744850dcc95db5a06ed4a246236e","chainId":56,"decimals":6},{"name":"HARD","symbol":"HARD","address":"0xf79037f6f6be66832de4e7516be52826bc3cbcc4","chainId":56,"decimals":6},{"name":"ROOBEE","symbol":"bROOBEE","address":"0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe","chainId":56,"decimals":18},{"name":"Unifi Token","symbol":"UNFI","address":"0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B","chainId":56,"decimals":18},{"name":"BLINk","symbol":"BLK","address":"0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F","chainId":56,"decimals":6},{"name":"QUSD Stablecoin","symbol":"QUSD","address":"0xb8C540d00dd0Bf76ea12E4B4B95eFC90804f924E","chainId":56,"decimals":18},{"name":"Qian Governance Token","symbol":"KUN","address":"0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584","chainId":56,"decimals":18},{"name":"VAI Stablecoin","symbol":"VAI","address":"0x4bd17003473389a42daf6a0a729f6fdb328bbbd7","chainId":56,"decimals":18},{"name":"Juventus","symbol":"JUV","address":"0xc40c9a843e1c6d01b7578284a9028854f6683b1b","chainId":56,"decimals":2},{"name":"Paris Saint-Germain","symbol":"PSG","address":"0xbc5609612b7c44bef426de600b5fd1379db2ecf1","chainId":56,"decimals":2},{"name":"Ditto","symbol":"DITTO","address":"0x233d91A0713155003fc4DcE0AFa871b508B3B715","chainId":56,"decimals":9},{"name":"Math","symbol":"MATH","address":"0xf218184af829cf2b0019f8e6f0b2423498a36983","chainId":56,"decimals":18},{"name":"Fuel","symbol":"FUEL","address":"0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A","chainId":56,"decimals":18},{"name":"Nuls","symbol":"NULS","address":"0x8cd6e29d3686d24d3c2018cee54621ea0f89313b","chainId":56,"decimals":8},{"name":"NerveNetwork","symbol":"NVT","address":"0xf0e406c49c63abf358030a299c0e00118c4c6ba5","chainId":56,"decimals":8},{"name":"Reef","symbol":"REEF","address":"0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e","chainId":56,"decimals":18},{"name":"OG","symbol":"OG","address":"0xf05e45ad22150677a017fbd94b84fbb63dc9b44c","chainId":56,"decimals":2},{"name":"Atletico de Madrid","symbol":"ATM","address":"0x25e9d05365c867e59c1904e7463af9f312296f9e","chainId":56,"decimals":2},{"name":"AS Roma","symbol":"ASR","address":"0x80d5f92c2c8c682070c95495313ddb680b267320","chainId":56,"decimals":2},{"name":"AllianceBlock","symbol":"bALBT","address":"0x72faa679e1008ad8382959ff48e392042a8b06f7","chainId":56,"decimals":18},{"name":"Tenet","symbol":"TEN","address":"0xdff8cb622790b7f92686c722b02cab55592f152c","chainId":56,"decimals":18},{"name":"Helmet.insure","symbol":"Helmet","address":"0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8","chainId":56,"decimals":18},{"name":"BSCEX","symbol":"BSCX","address":"0x5ac52ee5b2a633895292ff6d8a89bb9190451587","chainId":56,"decimals":18},{"name":"Standard BTC Hashrate Token","symbol":"BTCST","address":"0x78650b139471520656b9e7aa7a5e9276814a38e9","chainId":56,"decimals":18},{"name":"Frontier Token","symbol":"FRONT","address":"0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b","chainId":56,"decimals":18},{"name":"Soteria","symbol":"wSOTE","address":"0x541e619858737031a1244a5d0cd47e5ef480342c","chainId":56,"decimals":18},{"name":"Camel Token","symbol":"CAMEL","address":"0x7979F6C54ebA05E18Ded44C4F986F49a5De551c2","chainId":56,"decimals":18},{"name":"Mirror TSLA Token","symbol":"mTSLA","address":"0xF215A127A196e3988C09d052e16BcFD365Cd7AA3","chainId":56,"decimals":18},{"name":"Mirror AMZN Token","symbol":"mAMZN","address":"0x3947B992DC0147D2D89dF0392213781b04B25075","chainId":56,"decimals":18},{"name":"Mirror NFLX Token","symbol":"mNFLX","address":"0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc","chainId":56,"decimals":18},{"name":"Mirror GOOGL Token","symbol":"mGOOGL","address":"0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f","chainId":56,"decimals":18},{"name":"UST Token","symbol":"UST","address":"0x23396cF899Ca06c4472205fC903bDB4de249D6fC","chainId":56,"decimals":18},{"name":"Dogecoin","symbol":"DOGE","address":"0xba2ae424d960c26247dd6c32edc70b295c744c43","chainId":56,"decimals":8},{"name":"bDollar","symbol":"BDO","address":"0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454","chainId":56,"decimals":18},{"name":"bDollar Share","symbol":"sBDO","address":"0x0d9319565be7f53CeFE84Ad201Be3f40feAE2740","chainId":56,"decimals":18},{"name":"Elrond","symbol":"EGLD","address":"0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe","chainId":56,"decimals":18},{"name":"Litentry","symbol":"LIT","address":"0xb59490ab09a0f526cc7305822ac65f2ab12f9723","chainId":56,"decimals":18},{"name":"Beacon ETH","symbol":"BETH","address":"0x250632378e573c6be1ac2f97fcdf00515d0aa91b","chainId":56,"decimals":18},{"name":"SafePal Token","symbol":"SFP","address":"0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb","chainId":56,"decimals":18},{"name":"Compound Finance","symbol":"COMP","address":"0x52ce071bd9b1c4b00a0b92d298c512478cad67e8","chainId":56,"decimals":18},{"name":"Swirge Pay","symbol":"SWGb","address":"0xe40255c5d7fa7ceec5120408c78c787cecb4cfdb","chainId":56,"decimals":18},{"name":"Berry","symbol":"BRY","address":"0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830","chainId":56,"decimals":18},{"name":"Swingby","symbol":"SWINGBY","address":"0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739","chainId":56,"decimals":18}]}'
			);
		},
		169: function (e) {
			e.exports = JSON.parse(
				'[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'
			);
		},
		170: function (e) {
			e.exports = JSON.parse(
				'[{"name":"TokenPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"eth_sold","indexed":true},{"type":"uint256","name":"tokens_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"EthPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"tokens_sold","indexed":true},{"type":"uint256","name":"eth_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"AddLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"RemoveLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_spender","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"setup","outputs":[],"inputs":[{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"addLiquidity","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_liquidity"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"removeLiquidity","outputs":[{"type":"uint256","name":"outA"},{"type":"uint256","name":"outB"}],"inputs":[{"type":"uint256","name":"amount"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"__default__","outputs":[],"inputs":[],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function"},{"name":"tokenToEthSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"getEthToTokenInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_sold"}],"constant":true,"payable":false,"type":"function"},{"name":"getEthToTokenOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenToEthInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenToEthOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"}],"constant":true,"payable":false,"type":"function"},{"name":"tokenAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"factoryAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"}],"constant":true,"payable":false,"type":"function"},{"name":"transfer","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"transferFrom","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"approve","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_spender"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"allowance","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"address","name":"_spender"}],"constant":true,"payable":false,"type":"function"},{"name":"name","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"symbol","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"decimals","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"}]'
			);
		},
		171: function (e) {
			e.exports = JSON.parse(
				'[{"name":"NewExchange","inputs":[{"type":"address","name":"token","indexed":true},{"type":"address","name":"exchange","indexed":true}],"anonymous":false,"type":"event"},{"name":"initializeFactory","outputs":[],"inputs":[{"type":"address","name":"template"}],"constant":false,"payable":false,"type":"function"},{"name":"createExchange","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"token"}],"constant":false,"payable":false,"type":"function"},{"name":"getExchange","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"token"}],"constant":true,"payable":false,"type":"function"},{"name":"getToken","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"exchange"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenWithId","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"token_id"}],"constant":true,"payable":false,"type":"function"},{"name":"exchangeTemplate","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"tokenCount","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"}]'
			);
		},
		235: function (e) {
			e.exports = JSON.parse(
				'[{"inputs":[{"internalType":"address","name":"_factoryV1","type":"address"},{"internalType":"address","name":"_router","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'
			);
		},
		236: function (e) {
			e.exports = JSON.parse(
				'[{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'
			);
		},
		268: function (e) {
			e.exports = JSON.parse(
				'[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]'
			);
		},
		269: function (e) {
			e.exports = JSON.parse(
				'[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]'
			);
		},
		270: function (e) {
			e.exports = JSON.parse(
				'[{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_approved","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"ApprovalForAll","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_operator","indexed":true},{"type":"bool","name":"_approved","indexed":false}],"anonymous":false,"type":"event"},{"outputs":[],"inputs":[],"constant":false,"payable":false,"type":"constructor"},{"name":"tokenURI","outputs":[{"type":"string","name":"out"}],"inputs":[{"type":"uint256","name":"_tokenId"}],"constant":true,"payable":false,"type":"function","gas":22405},{"name":"tokenByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":631},{"name":"tokenOfOwnerByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":1248},{"name":"transferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":259486},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function"},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"},{"type":"bytes","name":"_data"}],"constant":false,"payable":false,"type":"function"},{"name":"approve","outputs":[],"inputs":[{"type":"address","name":"_approved"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":38422},{"name":"setApprovalForAll","outputs":[],"inputs":[{"type":"address","name":"_operator"},{"type":"bool","name":"_approved"}],"constant":false,"payable":false,"type":"function","gas":38016},{"name":"mint","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"}],"constant":false,"payable":false,"type":"function","gas":182636},{"name":"changeMinter","outputs":[],"inputs":[{"type":"address","name":"_minter"}],"constant":false,"payable":false,"type":"function","gas":35897},{"name":"changeURI","outputs":[],"inputs":[{"type":"address","name":"_newURI"}],"constant":false,"payable":false,"type":"function","gas":35927},{"name":"name","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":6612},{"name":"symbol","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":6642},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":873},{"name":"minter","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":903},{"name":"socks","outputs":[{"type":"address","name":"out","unit":"Socks"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":933},{"name":"newURI","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":963},{"name":"ownerOf","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1126},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1195},{"name":"getApproved","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1186},{"name":"isApprovedForAll","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"arg0"},{"type":"address","name":"arg1"}],"constant":true,"payable":false,"type":"function","gas":1415},{"name":"supportsInterface","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"bytes32","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1246}]'
			);
		},
		271: function (e) {
			e.exports = JSON.parse(
				'[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]'
			);
		},
		376: function (e, n) {},
		478: function (e, n, t) {
			"use strict";
			t.r(n);
			var r = t(1),
				a = t(0),
				i = t.n(a),
				c = t(106),
				o = t.n(c),
				s = t(4),
				u = t(9),
				l = t(5);
			function d() {
				var e = Object(u.a)([
					"\n  body {\n    background-color: ",
					";\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n",
				]);
				return (
					(d = function () {
						return e;
					}),
					e
				);
			}
			var b,
				p = Object(l.createGlobalStyle)(d(), function (e) {
					return e.theme.colors.background;
				}),
				f = t(6),
				j = t.n(f),
				m = t(26),
				h = t(11),
				y = t(37),
				v = t(36),
				O = t(254),
				x = t(59),
				g = t(126),
				w = t(17),
				C = t(168),
				k = t(256),
				T = t(257),
				I = t(258),
				E = t(259),
				N = t(10),
				A = t(12),
				S = t(14),
				R = t(15),
				U = t(2),
				B = t(262),
				P =
					((b = {}),
					Object(w.a)(b, U.a.MAINNET, void 0),
					Object(w.a)(b, U.a.BSCTESTNET, "Bsc-testnet"),
					b),
				_ = (function (e) {
					Object(S.a)(r, e);
					var n = Object(R.a)(r);
					function r() {
						return Object(N.a)(this, r), n.apply(this, arguments);
					}
					return (
						Object(A.a)(r, [
							{
								key: "activate",
								value: (function () {
									var e = Object(m.a)(
										j.a.mark(function e() {
											var n,
												r,
												a,
												i,
												c,
												o,
												s,
												u,
												l,
												d,
												b = this;
											return j.a.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																if (this.fortmatic) {
																	e.next = 11;
																	break;
																}
																return (
																	(e.next = 3),
																	t.e(1).then(t.t.bind(null, 485, 7))
																);
															case 3:
																if (
																	((n = e.sent),
																	(r = n.default),
																	(i = (a = this).apiKey),
																	!((c = a.chainId) in P))
																) {
																	e.next = 10;
																	break;
																}
																(this.fortmatic = new r(i, P[c])),
																	(e.next = 11);
																break;
															case 10:
																throw new Error(
																	"Unsupported network ID: ".concat(c)
																);
															case 11:
																return (
																	(o = this.fortmatic.getProvider()),
																	(s = new Promise(function (e) {
																		var n = setInterval(function () {
																			o.overlayReady &&
																				(clearInterval(n),
																				b.emit("OVERLAY_READY"),
																				e());
																		}, 200);
																	})),
																	(e.next = 15),
																	Promise.all([
																		o.enable().then(function (e) {
																			return e[0];
																		}),
																		s,
																	])
																);
															case 15:
																return (
																	(u = e.sent),
																	(l = Object(h.a)(u, 1)),
																	(d = l[0]),
																	e.abrupt("return", {
																		provider: this.fortmatic.getProvider(),
																		chainId: this.chainId,
																		account: d,
																	})
																);
															case 19:
															case "end":
																return e.stop();
														}
												},
												e,
												this
											);
										})
									);
									return function () {
										return e.apply(this, arguments);
									};
								})(),
							},
						]),
						r
					);
				})(B.a),
				M = t(127),
				D = t(96),
				L = t(62),
				F = t(19),
				z = (function (e) {
					Object(S.a)(t, e);
					var n = Object(R.a)(t);
					function t(e, r, a) {
						var i;
						return (
							Object(N.a)(this, t),
							((i = n.call(this, e)).code = r),
							(i.data = a),
							i
						);
					}
					return t;
				})(Object(D.a)(Error)),
				Y = function e(n, t, r) {
					var a = this;
					Object(N.a)(this, e),
						(this.isMetaMask = !1),
						(this.chainId = void 0),
						(this.url = void 0),
						(this.host = void 0),
						(this.path = void 0),
						(this.batchWaitTimeMs = void 0),
						(this.nextId = 1),
						(this.batchTimeoutId = null),
						(this.batch = []),
						(this.clearBatch = Object(m.a)(
							j.a.mark(function e() {
								var n, t, r, i, c, o, s, u, l, d, b, p, f, m;
								return j.a.wrap(
									function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (
														console.debug("Clearing batch", a.batch),
														(n = a.batch),
														(a.batch = []),
														(a.batchTimeoutId = null),
														(e.prev = 4),
														(e.next = 7),
														fetch(a.url, {
															method: "POST",
															headers: {
																"content-type": "application/json",
																accept: "application/json",
															},
															body: JSON.stringify(
																n.map(function (e) {
																	return e.request;
																})
															),
														})
													);
												case 7:
													(t = e.sent), (e.next = 14);
													break;
												case 10:
													return (
														(e.prev = 10),
														(e.t0 = e.catch(4)),
														n.forEach(function (e) {
															return (0,
															e.reject)(new Error("Failed to send batch call"));
														}),
														e.abrupt("return")
													);
												case 14:
													if (t.ok) {
														e.next = 17;
														break;
													}
													return (
														n.forEach(function (e) {
															return (0,
															e.reject)(new z("".concat(t.status, ": ").concat(t.statusText), -32e3));
														}),
														e.abrupt("return")
													);
												case 17:
													return (e.prev = 17), (e.next = 20), t.json();
												case 20:
													(r = e.sent), (e.next = 27);
													break;
												case 23:
													return (
														(e.prev = 23),
														(e.t1 = e.catch(17)),
														n.forEach(function (e) {
															return (0,
															e.reject)(new Error("Failed to parse JSON response"));
														}),
														e.abrupt("return")
													);
												case 27:
													(i = n.reduce(function (e, n) {
														return (e[n.request.id] = n), e;
													}, {})),
														(c = Object(M.a)(r));
													try {
														for (c.s(); !(o = c.n()).done; )
															(s = o.value),
																(u = i[s.id]),
																(l = u.resolve),
																(d = u.reject),
																(b = u.request.method),
																l &&
																	d &&
																	("error" in s
																		? d(
																				new z(
																					null === s ||
																					void 0 === s ||
																					null === (p = s.error) ||
																					void 0 === p
																						? void 0
																						: p.message,
																					null === s ||
																					void 0 === s ||
																					null === (f = s.error) ||
																					void 0 === f
																						? void 0
																						: f.code,
																					null === s ||
																					void 0 === s ||
																					null === (m = s.error) ||
																					void 0 === m
																						? void 0
																						: m.data
																				)
																		  )
																		: "result" in s
																		? l(s.result)
																		: d(
																				new z(
																					"Received unexpected JSON-RPC response to ".concat(
																						b,
																						" request."
																					),
																					-32e3,
																					s
																				)
																		  ));
													} catch (j) {
														c.e(j);
													} finally {
														c.f();
													}
												case 30:
												case "end":
													return e.stop();
											}
									},
									e,
									null,
									[
										[4, 10],
										[17, 23],
									]
								);
							})
						)),
						(this.sendAsync = function (e, n) {
							a.request(e.method, e.params)
								.then(function (t) {
									return n(null, { jsonrpc: "2.0", id: e.id, result: t });
								})
								.catch(function (e) {
									return n(e, null);
								});
						}),
						(this.request = (function () {
							var e = Object(m.a)(
								j.a.mark(function e(n, t) {
									var r, i;
									return j.a.wrap(function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													if ("string" === typeof n) {
														e.next = 2;
														break;
													}
													return e.abrupt(
														"return",
														a.request(n.method, n.params)
													);
												case 2:
													if ("eth_chainId" !== n) {
														e.next = 4;
														break;
													}
													return e.abrupt(
														"return",
														"0x".concat(a.chainId.toString(16))
													);
												case 4:
													return (
														(i = new Promise(function (e, r) {
															a.batch.push({
																request: {
																	jsonrpc: "2.0",
																	id: a.nextId++,
																	method: n,
																	params: t,
																},
																resolve: e,
																reject: r,
															});
														})),
														(a.batchTimeoutId =
															null !== (r = a.batchTimeoutId) && void 0 !== r
																? r
																: setTimeout(a.clearBatch, a.batchWaitTimeMs)),
														e.abrupt("return", i)
													);
												case 7:
												case "end":
													return e.stop();
											}
									}, e);
								})
							);
							return function (n, t) {
								return e.apply(this, arguments);
							};
						})()),
						(this.chainId = n),
						(this.url = t);
					var i = new URL(t);
					(this.host = i.host),
						(this.path = i.pathname),
						(this.batchWaitTimeMs = null !== r && void 0 !== r ? r : 50);
				},
				q = (function (e) {
					Object(S.a)(t, e);
					var n = Object(R.a)(t);
					function t(e) {
						var r,
							a = e.urls,
							i = e.defaultChainId;
						return (
							Object(N.a)(this, t),
							Object(F.a)(
								i || 1 === Object.keys(a).length,
								"defaultChainId is a required argument with >1 url"
							),
							((r = n.call(this, {
								supportedChainIds: Object.keys(a).map(function (e) {
									return Number(e);
								}),
							})).providers = void 0),
							(r.currentChainId = void 0),
							(r.currentChainId = i || Number(Object.keys(a)[0])),
							(r.providers = Object.keys(a).reduce(function (e, n) {
								return (e[Number(n)] = new Y(Number(n), a[Number(n)])), e;
							}, {})),
							r
						);
					}
					return (
						Object(A.a)(t, [
							{
								key: "activate",
								value: (function () {
									var e = Object(m.a)(
										j.a.mark(function e() {
											return j.a.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return e.abrupt("return", {
																	provider: this.providers[this.currentChainId],
																	chainId: this.currentChainId,
																	account: null,
																});
															case 1:
															case "end":
																return e.stop();
														}
												},
												e,
												this
											);
										})
									);
									return function () {
										return e.apply(this, arguments);
									};
								})(),
							},
							{
								key: "getProvider",
								value: (function () {
									var e = Object(m.a)(
										j.a.mark(function e() {
											return j.a.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return e.abrupt(
																	"return",
																	this.providers[this.currentChainId]
																);
															case 1:
															case "end":
																return e.stop();
														}
												},
												e,
												this
											);
										})
									);
									return function () {
										return e.apply(this, arguments);
									};
								})(),
							},
							{
								key: "getChainId",
								value: (function () {
									var e = Object(m.a)(
										j.a.mark(function e() {
											return j.a.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return e.abrupt("return", this.currentChainId);
															case 1:
															case "end":
																return e.stop();
														}
												},
												e,
												this
											);
										})
									);
									return function () {
										return e.apply(this, arguments);
									};
								})(),
							},
							{
								key: "getAccount",
								value: (function () {
									var e = Object(m.a)(
										j.a.mark(function e() {
											return j.a.wrap(function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return e.abrupt("return", null);
														case 1:
														case "end":
															return e.stop();
													}
											}, e);
										})
									);
									return function () {
										return e.apply(this, arguments);
									};
								})(),
							},
							{ key: "deactivate", value: function () {} },
							{
								key: "provider",
								get: function () {
									return this.providers[this.currentChainId];
								},
							},
						]),
						t
					);
				})(L.a),
				V = t(13),
				H = t(23),
				W = t(61);
			function K(e) {
				return e.hasOwnProperty("result") ? e.result : e;
			}
			var G = (function (e) {
					Object(S.a)(t, e);
					var n = Object(R.a)(t);
					function t() {
						var e;
						return (
							Object(N.a)(this, t),
							((e = n.call(this)).name = e.constructor.name),
							(e.message = "No BSC provider was found on window.BinanceChain."),
							e
						);
					}
					return t;
				})(Object(D.a)(Error)),
				Q = (function (e) {
					Object(S.a)(t, e);
					var n = Object(R.a)(t);
					function t() {
						var e;
						return (
							Object(N.a)(this, t),
							((e = n.call(this)).name = e.constructor.name),
							(e.message = "The user rejected the request."),
							e
						);
					}
					return t;
				})(Object(D.a)(Error)),
				J = (function (e) {
					Object(S.a)(t, e);
					var n = Object(R.a)(t);
					function t(e) {
						var r;
						return (
							Object(N.a)(this, t),
							((r = n.call(
								this,
								e
							)).handleNetworkChanged = r.handleNetworkChanged.bind(
								Object(H.a)(r)
							)),
							(r.handleChainChanged = r.handleChainChanged.bind(
								Object(H.a)(r)
							)),
							(r.handleAccountsChanged = r.handleAccountsChanged.bind(
								Object(H.a)(r)
							)),
							(r.handleClose = r.handleClose.bind(Object(H.a)(r))),
							r
						);
					}
					return (
						Object(A.a)(t, [
							{
								key: "handleChainChanged",
								value: function (e) {
									this.emitUpdate({
										chainId: e,
										provider: window.BinanceChain,
									});
								},
							},
							{
								key: "handleAccountsChanged",
								value: function (e) {
									0 === e.length
										? this.emitDeactivate()
										: this.emitUpdate({ account: e[0] });
								},
							},
							{
								key: "handleClose",
								value: function () {
									this.emitDeactivate();
								},
							},
							{
								key: "handleNetworkChanged",
								value: function (e) {
									this.emitUpdate({
										chainId: e,
										provider: window.BinanceChain,
									});
								},
							},
							{
								key: "activate",
								value: (function () {
									var e = Object(m.a)(
										j.a.mark(function e() {
											var n;
											return j.a.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																if (window.BinanceChain) {
																	e.next = 2;
																	break;
																}
																throw new G();
															case 2:
																return (
																	window.BinanceChain.on &&
																		(window.BinanceChain.on(
																			"chainChanged",
																			this.handleChainChanged
																		),
																		window.BinanceChain.on(
																			"accountsChanged",
																			this.handleAccountsChanged
																		),
																		window.BinanceChain.on(
																			"close",
																			this.handleClose
																		),
																		window.BinanceChain.on(
																			"networkChanged",
																			this.handleNetworkChanged
																		)),
																	window.BinanceChain.isMetaMask &&
																		(window.BinanceChain.autoRefreshOnNetworkChange = !1),
																	(e.prev = 4),
																	(e.next = 7),
																	window.BinanceChain.send(
																		"eth_requestAccounts"
																	).then(function (e) {
																		return K(e)[0];
																	})
																);
															case 7:
																(n = e.sent), (e.next = 15);
																break;
															case 10:
																if (
																	((e.prev = 10),
																	(e.t0 = e.catch(4)),
																	4001 !== e.t0.code)
																) {
																	e.next = 14;
																	break;
																}
																throw new Q();
															case 14:
																Object(W.a)(
																	!1,
																	"eth_requestAccounts was unsuccessful, falling back to enable"
																);
															case 15:
																if (n) {
																	e.next = 19;
																	break;
																}
																return (
																	(e.next = 18),
																	window.BinanceChain.enable().then(function (
																		e
																	) {
																		return e && K(e)[0];
																	})
																);
															case 18:
																n = e.sent;
															case 19:
																return e.abrupt(
																	"return",
																	Object(V.a)(
																		{ provider: window.BinanceChain },
																		n ? { account: n } : {}
																	)
																);
															case 20:
															case "end":
																return e.stop();
														}
												},
												e,
												this,
												[[4, 10]]
											);
										})
									);
									return function () {
										return e.apply(this, arguments);
									};
								})(),
							},
							{
								key: "getProvider",
								value: (function () {
									var e = Object(m.a)(
										j.a.mark(function e() {
											return j.a.wrap(function (e) {
												for (;;)
													switch ((e.prev = e.next)) {
														case 0:
															return e.abrupt("return", window.BinanceChain);
														case 1:
														case "end":
															return e.stop();
													}
											}, e);
										})
									);
									return function () {
										return e.apply(this, arguments);
									};
								})(),
							},
							{
								key: "getChainId",
								value: (function () {
									var e = Object(m.a)(
										j.a.mark(function e() {
											var n;
											return j.a.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																if (window.BinanceChain) {
																	e.next = 2;
																	break;
																}
																throw new G();
															case 2:
																return (
																	(e.prev = 2),
																	(e.next = 5),
																	window.BinanceChain.send("eth_chainId").then(
																		K
																	)
																);
															case 5:
																(n = e.sent), (e.next = 11);
																break;
															case 8:
																(e.prev = 8),
																	(e.t0 = e.catch(2)),
																	Object(W.a)(
																		!1,
																		"eth_chainId was unsuccessful, falling back to net_version"
																	);
															case 11:
																if (n) {
																	e.next = 21;
																	break;
																}
																return (
																	(e.prev = 12),
																	(e.next = 15),
																	window.BinanceChain.send("net_version").then(
																		K
																	)
																);
															case 15:
																(n = e.sent), (e.next = 21);
																break;
															case 18:
																(e.prev = 18),
																	(e.t1 = e.catch(12)),
																	Object(W.a)(
																		!1,
																		"net_version was unsuccessful, falling back to net version v2"
																	);
															case 21:
																if (!n)
																	try {
																		n = K(
																			window.BinanceChain.send({
																				method: "net_version",
																			})
																		);
																	} catch (t) {
																		Object(W.a)(
																			!1,
																			"net_version v2 was unsuccessful, falling back to manual matches and static properties"
																		);
																	}
																return (
																	n ||
																		(n = window.BinanceChain.isDapper
																			? K(
																					window.BinanceChain.cachedResults
																						.net_version
																			  )
																			: window.BinanceChain.chainId ||
																			  window.BinanceChain.netVersion ||
																			  window.BinanceChain.networkVersion ||
																			  window.BinanceChain._chainId),
																	e.abrupt("return", n)
																);
															case 24:
															case "end":
																return e.stop();
														}
												},
												e,
												null,
												[
													[2, 8],
													[12, 18],
												]
											);
										})
									);
									return function () {
										return e.apply(this, arguments);
									};
								})(),
							},
							{
								key: "getAccount",
								value: (function () {
									var e = Object(m.a)(
										j.a.mark(function e() {
											var n;
											return j.a.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																if (window.BinanceChain) {
																	e.next = 2;
																	break;
																}
																throw new G();
															case 2:
																return (
																	(e.prev = 2),
																	(e.next = 5),
																	window.BinanceChain.send("eth_accounts").then(
																		function (e) {
																			return K(e)[0];
																		}
																	)
																);
															case 5:
																(n = e.sent), (e.next = 11);
																break;
															case 8:
																(e.prev = 8),
																	(e.t0 = e.catch(2)),
																	Object(W.a)(
																		!1,
																		"eth_accounts was unsuccessful, falling back to enable"
																	);
															case 11:
																if (n) {
																	e.next = 21;
																	break;
																}
																return (
																	(e.prev = 12),
																	(e.next = 15),
																	window.BinanceChain.enable().then(function (
																		e
																	) {
																		return K(e)[0];
																	})
																);
															case 15:
																(n = e.sent), (e.next = 21);
																break;
															case 18:
																(e.prev = 18),
																	(e.t1 = e.catch(12)),
																	Object(W.a)(
																		!1,
																		"enable was unsuccessful, falling back to eth_accounts v2"
																	);
															case 21:
																return (
																	n ||
																		(n = K(
																			window.BinanceChain.send({
																				method: "eth_accounts",
																			})
																		)[0]),
																	e.abrupt("return", n)
																);
															case 23:
															case "end":
																return e.stop();
														}
												},
												e,
												null,
												[
													[2, 8],
													[12, 18],
												]
											);
										})
									);
									return function () {
										return e.apply(this, arguments);
									};
								})(),
							},
							{
								key: "deactivate",
								value: function () {
									window.BinanceChain &&
										window.BinanceChain.removeListener &&
										(window.BinanceChain.removeListener(
											"chainChanged",
											this.handleChainChanged
										),
										window.BinanceChain.removeListener(
											"accountsChanged",
											this.handleAccountsChanged
										),
										window.BinanceChain.removeListener(
											"close",
											this.handleClose
										),
										window.BinanceChain.removeListener(
											"networkChanged",
											this.handleNetworkChanged
										));
								},
							},
							{
								key: "isAuthorized",
								value: (function () {
									var e = Object(m.a)(
										j.a.mark(function e() {
											return j.a.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																if (window.BinanceChain) {
																	e.next = 2;
																	break;
																}
																return e.abrupt("return", !1);
															case 2:
																return (
																	(e.prev = 2),
																	(e.next = 5),
																	window.BinanceChain.send("eth_accounts").then(
																		function (e) {
																			return K(e).length > 0;
																		}
																	)
																);
															case 5:
																return e.abrupt("return", e.sent);
															case 8:
																return (
																	(e.prev = 8),
																	(e.t0 = e.catch(2)),
																	e.abrupt("return", !1)
																);
															case 11:
															case "end":
																return e.stop();
														}
												},
												e,
												null,
												[[2, 8]]
											);
										})
									);
									return function () {
										return e.apply(this, arguments);
									};
								})(),
							},
						]),
						t
					);
				})(L.a),
				X = "https://bsc-dataseed1.defibit.io",
				Z = Object({
					NODE_ENV: "production",
					PUBLIC_URL: ".",
					WDS_SOCKET_HOST: void 0,
					WDS_SOCKET_PATH: void 0,
					WDS_SOCKET_PORT: void 0,
					FAST_REFRESH: !0,
					REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io",
					REACT_APP_CHAIN_ID: "56",
					REACT_APP_GTAG: "G-1XYHJL2RMR",
				}).REACT_APP_FORTMATIC_KEY,
				$ = Object({
					NODE_ENV: "production",
					PUBLIC_URL: ".",
					WDS_SOCKET_HOST: void 0,
					WDS_SOCKET_PATH: void 0,
					WDS_SOCKET_PORT: void 0,
					FAST_REFRESH: !0,
					REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io",
					REACT_APP_CHAIN_ID: "56",
					REACT_APP_GTAG: "G-1XYHJL2RMR",
				}).REACT_APP_PORTIS_ID,
				ee = parseInt(null !== "56" ? "56" : "1");
			var ne,
				te = new q({ urls: Object(w.a)({}, ee, X) });
			var re,
				ae = new k.a({ supportedChainIds: [56, 97] }),
				ie = new J({ supportedChainIds: [56] }),
				ce = new T.a({
					rpc: { 1: X },
					bridge: "https://bridge.walletconnect.org",
					qrcode: !0,
					pollingInterval: 15e3,
				}),
				oe =
					(new _({ apiKey: null !== Z && void 0 !== Z ? Z : "", chainId: 1 }),
					new E.a({
						dAppId: null !== $ && void 0 !== $ ? $ : "",
						networks: [1],
					}),
					new I.a({
						url: X,
						appName: "Uniswap",
						appLogoUrl:
							"https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg",
					}),
					t(27)),
				se = "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F",
				ue = new U.l(
					U.a.MAINNET,
					"0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
					18,
					"DAI",
					"Dai Stablecoin"
				),
				le = new U.l(
					U.a.MAINNET,
					"0xe9e7cea3dedca5984780bafc599bd69add087d56",
					18,
					"BUSD",
					"Binance USD"
				),
				de = new U.l(
					U.a.MAINNET,
					"0x55d398326f99059ff775485246999027b3197955",
					18,
					"USDT",
					"Tether USD"
				),
				be =
					(new U.l(
						U.a.MAINNET,
						"0x56b6fb708fc5732dec1afc8d8556423a2edccbd6",
						18,
						"EOS",
						"EOS Token"
					),
					new U.l(
						U.a.MAINNET,
						"0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
						18,
						"DOT",
						"Polkadot Token"
					),
					new U.l(
						U.a.MAINNET,
						"0x2170ed0880ac9a755fd29b2688956bd959f933f8",
						18,
						"ETH",
						"Ethereum Token"
					),
					new U.l(
						U.a.MAINNET,
						"0x615446C0Fd5eA8A5FD7fb763f3FC2C58774474F3",
						18,
						"BTCB",
						"Bitcoin Token"
					)),
				pe = new U.l(
					U.a.MAINNET,
					"0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
					18,
					"UST",
					"UST Token"
				),
				fe =
					((re = {}),
					Object(w.a)(re, U.a.MAINNET, [U.p[U.a.MAINNET]]),
					Object(w.a)(re, U.a.BSCTESTNET, [U.p[U.a.BSCTESTNET]]),
					re),
				je = Object(V.a)(
					Object(V.a)({}, fe),
					{},
					Object(w.a)(
						{},
						U.a.MAINNET,
						[].concat(Object(oe.a)(fe[U.a.MAINNET]), [le, be, pe])
					)
				),
				me = Object(V.a)(
					Object(V.a)({}, fe),
					{},
					Object(w.a)(
						{},
						U.a.MAINNET,
						[].concat(Object(oe.a)(fe[U.a.MAINNET]), [le, be, pe])
					)
				),
				he = Object(V.a)(
					Object(V.a)({}, fe),
					{},
					Object(w.a)(
						{},
						U.a.MAINNET,
						[].concat(Object(oe.a)(fe[U.a.MAINNET]), [le, be, pe])
					)
				),
				ye = Object(w.a)({}, U.a.MAINNET, [
					[
						new U.l(
							U.a.MAINNET,
//Thierry addresse TBC							
							"0x7979f6c54eba05e18ded44c4f986f49a5de551c2",
							18,
							"CAMEL",
							"Camel Token"
						),
						new U.l(
							U.a.MAINNET,
							"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
							18,
							"WBNB",
							"Wrapped BNB"
						),
					],
					[le, de],
					[ue, de],
				]),
				ve = "NETWORK",
				Oe = 80,
				xe = 1200,
				ge = new U.h(U.f.BigInt(1), U.f.BigInt(1e4)),
				we = U.f.BigInt(1e4),
				Ce = new U.h(U.f.BigInt(100), we),
				ke = new U.h(U.f.BigInt(300), we),
				Te = new U.h(U.f.BigInt(500), we),
				Ie = new U.h(U.f.BigInt(1e3), we),
				Ee = new U.h(U.f.BigInt(1500), we),
				Ne = U.f.exponentiate(U.f.BigInt(10), U.f.BigInt(16)),
				Ae = new U.h(U.f.BigInt(75), U.f.BigInt(1e4));
			function Se() {
				var e = Object(x.c)(),
					n = Object(x.c)(ve);
				return e.active ? e : n;
			}
			var Re = t(21),
				Ue = Object(Re.b)("app/updateBlockNumber"),
				Be = Object(Re.b)("app/toggleWalletModal"),
				Pe = Object(Re.b)("app/toggleSettingsMenu"),
				_e = Object(Re.b)("app/addPopup"),
				Me = Object(Re.b)("app/removePopup"),
				De = t(22);
			function Le() {
				var e = Se().chainId;
				return Object(De.d)(function (n) {
					return n.application.blockNumber[null !== e && void 0 !== e ? e : -1];
				});
			}
			function Fe() {
				var e = Object(De.c)();
				return Object(a.useCallback)(
					function (n) {
						e(Me({ key: n }));
					},
					[e]
				);
			}
			function ze() {
				var e = Object(u.a)([
					"\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ",
					";\n  justify-items: ",
					";\n",
				]);
				return (
					(ze = function () {
						return e;
					}),
					e
				);
			}
			function Ye() {
				var e = Object(u.a)(["\n  width: 100%;\n  align-items: center;\n"]);
				return (
					(Ye = function () {
						return e;
					}),
					e
				);
			}
			function qe() {
				var e = Object(u.a)([
					"\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n",
				]);
				return (
					(qe = function () {
						return e;
					}),
					e
				);
			}
			var Ve = l.default.div(qe()),
				He = Object(l.default)(Ve)(Ye()),
				We = l.default.div(
					ze(),
					function (e) {
						var n = e.gap;
						return (
							("sm" === n ? "8px" : "md" === n && "12px") ||
							("lg" === n && "24px") ||
							n
						);
					},
					function (e) {
						var n = e.justify;
						return n && n;
					}
				),
				Ke = Ve,
				Ge = t(492),
				Qe = t(95),
				Je = t(68),
				Xe = {
					pending: Object(Re.b)("lists/fetchTokenList/pending"),
					fulfilled: Object(Re.b)("lists/fetchTokenList/fulfilled"),
					rejected: Object(Re.b)("lists/fetchTokenList/rejected"),
				},
				Ze = Object(Re.b)("lists/acceptListUpdate"),
				$e = Object(Re.b)("lists/addList"),
				en = Object(Re.b)("lists/removeList"),
				nn = Object(Re.b)("lists/selectList"),
				tn = (Object(Re.b)("lists/rejectVersionUpdate"), t(55)),
				rn = t(44),
				an = t(493);
			function cn() {
				var e = Object(u.a)(["\n  color: ", ";\n"]);
				return (
					(cn = function () {
						return e;
					}),
					e
				);
			}
			function on() {
				var e = Object(u.a)([
					"\n  animation: 2s ",
					" linear infinite;\n  width: 16px;\n  height: 16px;\n",
				]);
				return (
					(on = function () {
						return e;
					}),
					e
				);
			}
			function sn() {
				var e = Object(u.a)([
					"\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n",
				]);
				return (
					(sn = function () {
						return e;
					}),
					e
				);
			}
			function un() {
				var e = Object(u.a)([
					"\n  text-decoration: none;\n  cursor: pointer;\n  color: ",
					";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n",
				]);
				return (
					(un = function () {
						return e;
					}),
					e
				);
			}
			function ln() {
				var e = Object(u.a)([
					"\n  text-decoration: none;\n  cursor: pointer;\n  color: ",
					";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n",
				]);
				return (
					(ln = function () {
						return e;
					}),
					e
				);
			}
			function dn() {
				var e = Object(u.a)([
					"\n  border: none;\n  text-decoration: none;\n  background: none;\n\n  cursor: ",
					";\n  color: ",
					";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: ",
					";\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: ",
					";\n  }\n\n  :active {\n    text-decoration: none;\n  }\n",
				]);
				return (
					(dn = function () {
						return e;
					}),
					e
				);
			}
			function bn() {
				var e = Object(u.a)(["\n  cursor: pointer;\n"]);
				return (
					(bn = function () {
						return e;
					}),
					e
				);
			}
			function pn() {
				var e = Object(u.a)([
					"\n  padding: 1rem 2rem 1rem 2rem;\n  border-radius: 3rem;\n  cursor: pointer;\n  user-select: none;\n  font-size: 1rem;\n  border: none;\n  outline: none;\n  background-color: ",
					";\n  #FFFFFFwidth: 100%;\n\n  :hover,\n  :focus {\n    background-color: ",
					";\n  }\n\n  :active {\n    background-color: ",
					";\n  }\n\n  :disabled {\n    background-color: ",
					";\n    color: ",
					";\n    cursor: auto;\n  }\n",
				]);
				return (
					(pn = function () {
						return e;
					}),
					e
				);
			}
			l.default.button.attrs(function (e) {
				var n = e.warning,
					t = e.theme;
				return { backgroundColor: n ? t.colors.failure : t.colors.primary };
			})(
				pn(),
				function (e) {
					return e.backgroundColor;
				},
				function (e) {
					var n = e.backgroundColor;
					return Object(rn.a)(0.05, n);
				},
				function (e) {
					var n = e.backgroundColor;
					return Object(rn.a)(0.1, n);
				},
				function (e) {
					return e.theme.colors.invertedContrast;
				},
				function (e) {
					return e.theme.colors.textDisabled;
				}
			);
			var fn = Object(l.default)(Ge.a)(bn()),
				jn = l.default.button(
					dn(),
					function (e) {
						return e.disabled ? "default" : "pointer";
					},
					function (e) {
						var n = e.theme;
						return e.disabled ? n.colors.textSubtle : n.colors.primary;
					},
					function (e) {
						return e.disabled ? null : "underline";
					},
					function (e) {
						return e.disabled ? null : "underline";
					}
				),
				mn = Object(l.default)(y.b)(ln(), function (e) {
					return e.theme.colors.primary;
				}),
				hn = l.default.a(un(), function (e) {
					return e.theme.colors.primary;
				});
			function yn(e) {
				var n = e.target,
					t = void 0 === n ? "_blank" : n,
					i = e.href,
					c = e.rel,
					o = void 0 === c ? "noopener noreferrer" : c,
					s = Object(tn.a)(e, ["target", "href", "rel"]),
					u = Object(a.useCallback)(
						function (e) {
							"_blank" === t || e.ctrlKey || e.metaKey || e.preventDefault();
						},
						[t]
					);
				return Object(r.jsx)(
					hn,
					Object(V.a)({ target: t, rel: o, href: i, onClick: u }, s)
				);
			}
			var vn = Object(l.keyframes)(sn()),
				On = l.default.img(on(), vn),
				xn = Object(l.default)(mn)(cn(), function (e) {
					return e.theme.colors.text;
				});
			function gn(e) {
				var n = e.to;
				return Object(r.jsx)(xn, { to: n, children: Object(r.jsx)(an.a, {}) });
			}
			var wn = function (e) {
					return Object(r.jsx)(s.v, Object(V.a)({}, e));
				},
				Cn = function (e) {
					return Object(r.jsx)(s.v, Object(V.a)({}, e));
				},
				kn = function (e) {
					return Object(r.jsx)(s.v, Object(V.a)({}, e));
				},
				Tn = function (e) {
					return Object(r.jsx)(
						s.v,
						Object(V.a)({ bold: !0, fontSize: "24px" }, e)
					);
				},
				In = function (e) {
					return Object(r.jsx)(
						s.v,
						Object(V.a)({ bold: !0, fontSize: "20px" }, e)
					);
				},
				En = function (e) {
					return Object(r.jsx)(s.v, Object(V.a)({}, e));
				},
				Nn = function (e) {
					return Object(r.jsx)(s.v, Object(V.a)({}, e));
				},
				An = function (e) {
					return Object(r.jsx)(
						s.v,
						Object(V.a)({ fontSize: "12px", style: { fontStyle: "italic" } }, e)
					);
				},
				Sn = function (e) {
					return Object(r.jsx)(s.v, Object(V.a)({ color: "failure" }, e));
				};
			function Rn(e) {
				return "v".concat(e.major, ".").concat(e.minor, ".").concat(e.patch);
			}
			var Un = t(264);
			function Bn() {
				var e = Object(u.a)(["\n  width: fit-content;\n  margin: ", ";\n"]);
				return (
					(Bn = function () {
						return e;
					}),
					e
				);
			}
			function Pn() {
				var e = Object(u.a)([
					"\n  flex-wrap: wrap;\n  margin: ",
					";\n  justify-content: ",
					";\n\n  & > * {\n    margin: ",
					" !important;\n  }\n",
				]);
				return (
					(Pn = function () {
						return e;
					}),
					e
				);
			}
			function _n() {
				var e = Object(u.a)(["\n  display: flex;\n  align-items: flex-end;\n"]);
				return (
					(_n = function () {
						return e;
					}),
					e
				);
			}
			function Mn() {
				var e = Object(u.a)(["\n  justify-content: space-between;\n"]);
				return (
					(Mn = function () {
						return e;
					}),
					e
				);
			}
			function Dn() {
				var e = Object(u.a)([
					"\n  width: 100%;\n  display: flex;\n  padding: 0;\n  align-items: ",
					";\n  padding: ",
					";\n  border: ",
					";\n  border-radius: ",
					";\n",
				]);
				return (
					(Dn = function () {
						return e;
					}),
					e
				);
			}
			var Ln = Object(l.default)(Un.Box)(
					Dn(),
					function (e) {
						var n = e.align;
						return n || "center";
					},
					function (e) {
						return e.padding;
					},
					function (e) {
						return e.border;
					},
					function (e) {
						return e.borderRadius;
					}
				),
				Fn = Object(l.default)(Ln)(Mn()),
				zn = l.default.div(_n()),
				Yn = Object(l.default)(Ln)(
					Pn(),
					function (e) {
						var n = e.gap;
						return n && "-".concat(n);
					},
					function (e) {
						var n = e.justify;
						return n && n;
					},
					function (e) {
						return e.gap;
					}
				),
				qn = Object(l.default)(Ln)(Bn(), function (e) {
					var n = e.gap;
					return n && "-".concat(n);
				}),
				Vn = Ln;
			function Hn(e) {
				var n = e.popKey,
					t = e.listUrl,
					c = e.oldList,
					o = e.newList,
					u = e.auto,
					l = Fe(),
					d = Object(a.useCallback)(
						function () {
							return l(n);
						},
						[n, l]
					),
					b = Object(De.c)(),
					p = Object(a.useCallback)(
						function () {
							u || (b(Ze(t)), d());
						},
						[u, b, t, d]
					),
					f = Object(a.useMemo)(
						function () {
							return Object(Je.b)(c.tokens, o.tokens);
						},
						[o.tokens, c.tokens]
					),
					j = f.added,
					m = f.changed,
					h = f.removed,
					y = Object(a.useMemo)(
						function () {
							return Object.keys(m).reduce(function (e, n) {
								return e + Object.keys(m[n]).length;
							}, 0);
						},
						[m]
					);
				return Object(r.jsx)(Yn, {
					children: Object(r.jsx)(We, {
						style: { flex: "1" },
						gap: "8px",
						children: u
							? Object(r.jsxs)(kn, {
									fontWeight: 500,
									children: [
										'The token list "',
										c.name,
										'" has been updated to',
										" ",
										Object(r.jsx)("strong", { children: Rn(o.version) }),
										".",
									],
							  })
							: Object(r.jsxs)(r.Fragment, {
									children: [
										Object(r.jsxs)("div", {
											children: [
												Object(r.jsxs)(s.v, {
													fontSize: "14px",
													children: [
														'An update is available for the token list "',
														c.name,
														'" (',
														Rn(c.version),
														" to ",
														Rn(o.version),
														").",
													],
												}),
												Object(r.jsxs)("ul", {
													children: [
														j.length > 0
															? Object(r.jsxs)("li", {
																	children: [
																		j.map(function (e, n) {
																			return Object(r.jsxs)(
																				i.a.Fragment,
																				{
																					children: [
																						Object(r.jsx)("strong", {
																							title: e.address,
																							children: e.symbol,
																						}),
																						n === j.length - 1 ? null : ", ",
																					],
																				},
																				""
																					.concat(e.chainId, "-")
																					.concat(e.address)
																			);
																		}),
																		" ",
																		"added",
																	],
															  })
															: null,
														h.length > 0
															? Object(r.jsxs)("li", {
																	children: [
																		h.map(function (e, n) {
																			return Object(r.jsxs)(
																				i.a.Fragment,
																				{
																					children: [
																						Object(r.jsx)("strong", {
																							title: e.address,
																							children: e.symbol,
																						}),
																						n === h.length - 1 ? null : ", ",
																					],
																				},
																				""
																					.concat(e.chainId, "-")
																					.concat(e.address)
																			);
																		}),
																		" ",
																		"removed",
																	],
															  })
															: null,
														y > 0
															? Object(r.jsxs)("li", {
																	children: [y, " tokens updated"],
															  })
															: null,
													],
												}),
											],
										}),
										Object(r.jsxs)(Yn, {
											children: [
												Object(r.jsx)("div", {
													style: { flexGrow: 1, marginRight: 12 },
													children: Object(r.jsx)(s.c, {
														onClick: p,
														children: "Accept update",
													}),
												}),
												Object(r.jsx)("div", {
													style: { flexGrow: 1 },
													children: Object(r.jsx)(s.c, {
														onClick: d,
														children: "Dismiss",
													}),
												}),
											],
										}),
									],
							  }),
					}),
				});
			}
			var Wn = t(494),
				Kn = t(495),
				Gn = t(97),
				Qn = t(30),
				Jn = t(480),
				Xn = t(24),
				Zn = t(265);
			function $n(e) {
				try {
					return Object(Qn.getAddress)(e);
				} catch (n) {
					return !1;
				}
			}
			var et = { 56: "", 97: "Bsc-testnet" };
			function nt(e, n, t) {
				var r = "https://".concat(et[e] || et[56], "bscscan.com");
				switch (t) {
					case "transaction":
						return "".concat(r, "/tx/").concat(n);
					case "token":
						return "".concat(r, "/token/").concat(n);
					case "address":
					default:
						return "".concat(r, "/address/").concat(n);
				}
			}
			function tt(e) {
				var n =
						arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
					t = $n(e);
				if (!t) throw Error("Invalid 'address' parameter '".concat(e, "'."));
				return ""
					.concat(t.substring(0, n + 2), "...")
					.concat(t.substring(42 - n));
			}
			function rt(e) {
				return e.mul(Xn.a.from(1e4).add(Xn.a.from(1e3))).div(Xn.a.from(1e4));
			}
			function at(e, n) {
				if (n < 0 || n > 1e4)
					throw Error("Unexpected slippage value: ".concat(n));
				return [
					U.f.divide(U.f.multiply(e.raw, U.f.BigInt(1e4 - n)), U.f.BigInt(1e4)),
					U.f.divide(U.f.multiply(e.raw, U.f.BigInt(1e4 + n)), U.f.BigInt(1e4)),
				];
			}
			function it(e, n, t, r) {
				if (!$n(e) || e === Jn.a)
					throw Error("Invalid 'address' parameter '".concat(e, "'."));
				return new Gn.a(
					e,
					n,
					(function (e, n) {
						return n
							? (function (e, n) {
									return e.getSigner(n).connectUnchecked();
							  })(e, n)
							: e;
					})(t, r)
				);
			}
			function ct(e, n, t) {
				return it(se, Zn.a, n, t);
			}
			function ot(e, n) {
				var t;
				return (
					n === U.d ||
					Boolean(
						n instanceof U.l &&
							(null === (t = e[n.chainId]) || void 0 === t
								? void 0
								: t[n.address])
					)
				);
			}
			function st() {
				var e = Object(u.a)(["\n  flex-wrap: nowrap;\n"]);
				return (
					(st = function () {
						return e;
					}),
					e
				);
			}
			var ut = Object(l.default)(Yn)(st());
			function lt(e) {
				var n = e.hash,
					t = e.success,
					i = e.summary,
					c = Se().chainId,
					o = Object(a.useContext)(l.ThemeContext);
				return Object(r.jsxs)(ut, {
					children: [
						Object(r.jsx)("div", {
							style: { paddingRight: 16 },
							children: t
								? Object(r.jsx)(Wn.a, { color: o.colors.success, size: 24 })
								: Object(r.jsx)(Kn.a, { color: o.colors.failure, size: 24 }),
						}),
						Object(r.jsxs)(We, {
							gap: "8px",
							children: [
								Object(r.jsx)(kn, {
									fontWeight: 500,
									children:
										null !== i && void 0 !== i
											? i
											: "Hash: " + n.slice(0, 8) + "..." + n.slice(58, 65),
								}),
								c &&
									Object(r.jsx)(yn, {
										href: nt(c, n, "transaction"),
										children: "View on bscscan",
									}),
							],
						}),
					],
				});
			}
			function dt() {
				var e = Object(u.a)([
					"\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background-color: ",
					";\n",
				]);
				return (
					(dt = function () {
						return e;
					}),
					e
				);
			}
			function bt() {
				var e = Object(u.a)([
					"\n  display: inline-block;\n  width: 100%;\n  padding: 1em;\n  background-color: ",
					";\n  position: relative;\n  border-radius: 10px;\n  padding: 20px;\n  padding-right: 35px;\n  overflow: hidden;\n\n  ",
					" {\n    min-width: 290px;\n  }\n",
				]);
				return (
					(bt = function () {
						return e;
					}),
					e
				);
			}
			function pt() {
				var e = Object(u.a)([
					"\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n",
				]);
				return (
					(pt = function () {
						return e;
					}),
					e
				);
			}
			var ft = Object(l.default)(Ge.a)(pt()),
				jt = l.default.div(
					bt(),
					function (e) {
						return e.theme.colors.invertedContrast;
					},
					function (e) {
						return e.theme.mediaQueries.sm;
					}
				),
				mt = l.default.div(dt(), function (e) {
					return e.theme.colors.tertiary;
				}),
				ht = Object(Qe.a)(mt);
			function yt(e) {
				var n = e.removeAfterMs,
					t = e.content,
					i = e.popKey,
					c = Fe(),
					o = Object(a.useCallback)(
						function () {
							return c(i);
						},
						[i, c]
					);
				Object(a.useEffect)(
					function () {
						if (null !== n) {
							var e = setTimeout(function () {
								o();
							}, n);
							return function () {
								clearTimeout(e);
							};
						}
					},
					[n, o]
				);
				var s,
					u = Object(a.useContext)(l.ThemeContext);
				if ("txn" in t) {
					var d = t.txn,
						b = d.hash,
						p = d.success,
						f = d.summary;
					s = Object(r.jsx)(lt, { hash: b, success: p, summary: f });
				} else if ("listUpdate" in t) {
					var j = t.listUpdate,
						m = j.listUrl,
						h = j.oldList,
						y = j.newList,
						v = j.auto;
					s = Object(r.jsx)(Hn, {
						popKey: i,
						listUrl: m,
						oldList: h,
						newList: y,
						auto: v,
					});
				}
				var O = Object(Qe.b)({
					from: { width: "100%" },
					to: { width: "0%" },
					config: { duration: null !== n && void 0 !== n ? n : void 0 },
				});
				return Object(r.jsxs)(jt, {
					children: [
						Object(r.jsx)(ft, { color: u.colors.textSubtle, onClick: o }),
						s,
						null !== n ? Object(r.jsx)(ht, { style: O }) : null,
					],
				});
			}
			function vt() {
				var e = Object(u.a)([
					"\n  position: fixed;\n  top: 64px;\n  right: 1rem;\n  max-width: 355px !important;\n  width: 100%;\n  z-index: 2;\n\n  ",
					" {\n    display: none;\n  }\n",
				]);
				return (
					(vt = function () {
						return e;
					}),
					e
				);
			}
			function Ot() {
				var e = Object(u.a)([
					"\n  height: 99%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  -webkit-overflow-scrolling: touch;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n",
				]);
				return (
					(Ot = function () {
						return e;
					}),
					e
				);
			}
			function xt() {
				var e = Object(u.a)([
					"\n  position: relative;\n  max-width: 100%;\n  height: ",
					";\n  margin: ",
					";\n  margin-bottom: ",
					"};\n  display: none;\n\n  ",
					" {\n    display: block;\n  }\n",
				]);
				return (
					(xt = function () {
						return e;
					}),
					e
				);
			}
			var gt = l.default.div(
					xt(),
					function (e) {
						return e.height;
					},
					function (e) {
						return e.height ? "0 auto;" : 0;
					},
					function (e) {
						return e.height ? "20px" : 0;
					},
					function (e) {
						return e.theme.mediaQueries.sm;
					}
				),
				wt = l.default.div(Ot()),
				Ct = Object(l.default)(We)(vt(), function (e) {
					return e.theme.mediaQueries.sm;
				});
			function kt() {
				var e = (function () {
					var e = Object(De.d)(function (e) {
						return e.application.popupList;
					});
					return Object(a.useMemo)(
						function () {
							return e.filter(function (e) {
								return e.show;
							});
						},
						[e]
					);
				})();
				return Object(r.jsxs)(r.Fragment, {
					children: [
						Object(r.jsx)(Ct, {
							gap: "20px",
							children: e.map(function (e) {
								return Object(r.jsx)(
									yt,
									{
										content: e.content,
										popKey: e.key,
										removeAfterMs: e.removeAfterMs,
									},
									e.key
								);
							}),
						}),
						Object(r.jsx)(gt, {
							height:
								(null === e || void 0 === e ? void 0 : e.length) > 0
									? "fit-content"
									: 0,
							children: Object(r.jsx)(wt, {
								children: e
									.slice(0)
									.reverse()
									.map(function (e) {
										return Object(r.jsx)(
											yt,
											{
												content: e.content,
												popKey: e.key,
												removeAfterMs: e.removeAfterMs,
											},
											e.key
										);
									}),
							}),
						}),
					],
				});
			}
			var Tt = t(112);
			function It() {
				var e = Object(u.a)([
					"\n  animation: 2s ",
					" linear infinite;\n  height: ",
					";\n  width: ",
					";\n  path {\n    stroke: ",
					";\n  }\n",
				]);
				return (
					(It = function () {
						return e;
					}),
					e
				);
			}
			function Et() {
				var e = Object(u.a)([
					"\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n",
				]);
				return (
					(Et = function () {
						return e;
					}),
					e
				);
			}
			var Nt = Object(l.keyframes)(Et()),
				At = l.default.svg(
					It(),
					Nt,
					function (e) {
						return e.size;
					},
					function (e) {
						return e.size;
					},
					function (e) {
						var n = e.stroke,
							t = e.theme;
						return null !== n && void 0 !== n ? n : t.colors.primary;
					}
				);
			function St(e) {
				var n = e.size,
					t = void 0 === n ? "16px" : n,
					a = e.stroke,
					i = Object(tn.a)(e, ["size", "stroke"]);
				return Object(r.jsx)(
					At,
					Object(V.a)(
						Object(V.a)(
							{
								viewBox: "0 0 24 24",
								fill: "none",
								xmlns: "http://www.w3.org/2000/svg",
								size: t,
								stroke: a,
							},
							i
						),
						{},
						{
							children: Object(r.jsx)("path", {
								d:
									"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
								strokeWidth: "2.5",
								strokeLinecap: "round",
								strokeLinejoin: "round",
							}),
						}
					)
				);
			}
			function Rt() {
				var e = Object(u.a)(["\n  color: ", ";\n"]);
				return (
					(Rt = function () {
						return e;
					}),
					e
				);
			}
			function Ut() {
				var e = Object(u.a)([
					"\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20rem;\n",
				]);
				return (
					(Ut = function () {
						return e;
					}),
					e
				);
			}
			var Bt = l.default.div(Ut()),
				Pt = l.default.h2(Rt(), function (e) {
					return e.theme.colors.primaryDark;
				});
			function _t(e) {
				var n = e.children,
					t = Object(Tt.b)().t,
					i = Object(x.c)().active,
					c = Object(x.c)(ve),
					o = c.active,
					s = c.error,
					u = c.activate,
					l = (function () {
						var e = Object(x.c)(),
							n = e.activate,
							t = e.active,
							r = Object(a.useState)(!1),
							i = Object(h.a)(r, 2),
							c = i[0],
							o = i[1];
						return (
							Object(a.useEffect)(
								function () {
									ae.isAuthorized().then(function (e) {
										var t = window.localStorage.getItem("accountStatus");
										(e && t) || (g.isMobile && window.ethereum && t)
											? n(ae, void 0, !0).catch(function () {
													o(!0);
											  })
											: o(!0);
									});
								},
								[n]
							),
							Object(a.useEffect)(
								function () {
									t && o(!0);
								},
								[t]
							),
							c
						);
					})();
				Object(a.useEffect)(
					function () {
						!l || o || s || i || u(te);
					},
					[l, o, s, u, i]
				),
					(function () {
						var e =
								arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							n = Object(x.c)(),
							t = n.active,
							r = n.error,
							i = n.activate;
						Object(a.useEffect)(
							function () {
								var n = window.ethereum;
								if (n && n.on && !t && !r && !e) {
									var a = function () {
											i(ae, void 0, !0).catch(function (e) {
												console.error(
													"Failed to activate after chain changed",
													e
												);
											});
										},
										c = function (e) {
											e.length > 0 &&
												i(ae, void 0, !0).catch(function (e) {
													console.error(
														"Failed to activate after accounts changed",
														e
													);
												});
										};
									return (
										n.on("chainChanged", a),
										n.on("accountsChanged", c),
										function () {
											n.removeListener &&
												(n.removeListener("chainChanged", a),
												n.removeListener("accountsChanged", c));
										}
									);
								}
							},
							[t, r, e, i]
						);
					})(!l);
				var d = Object(a.useState)(!1),
					b = Object(h.a)(d, 2),
					p = b[0],
					f = b[1];
				return (
					Object(a.useEffect)(function () {
						var e = setTimeout(function () {
							f(!0);
						}, 600);
						return function () {
							clearTimeout(e);
						};
					}, []),
					l
						? !i && s
							? Object(r.jsx)(Bt, {
									children: Object(r.jsx)(Pt, { children: t("unknownError") }),
							  })
							: i || o
							? n
							: p
							? Object(r.jsx)(Bt, { children: Object(r.jsx)(St, {}) })
							: null
						: null
				);
			}
			function Mt() {
				var e = Object(u.a)([
					"\n  background-color: ",
					";\n  color: ",
					";\n  border-radius: 12px;\n  width: fit-content;\n",
				]);
				return (
					(Mt = function () {
						return e;
					}),
					e
				);
			}
			function Dt() {
				var e = Object(u.a)([
					"\n  background-color: rgba(255, 0, 122, 0.03);\n  color: ",
					";\n  font-weight: 500;\n",
				]);
				return (
					(Dt = function () {
						return e;
					}),
					e
				);
			}
			function Lt() {
				var e = Object(u.a)([
					"\n  background-color: rgba(243, 132, 30, 0.05);\n  color: ",
					";\n  font-weight: 500;\n",
				]);
				return (
					(Lt = function () {
						return e;
					}),
					e
				);
			}
			function Ft() {
				var e = Object(u.a)(["\n  border: 1px solid ", ";\n"]);
				return (
					(Ft = function () {
						return e;
					}),
					e
				);
			}
			function zt() {
				var e = Object(u.a)(["\n  background-color: ", ";\n"]);
				return (
					(zt = function () {
						return e;
					}),
					e
				);
			}
			function Yt() {
				var e = Object(u.a)([
					"\n  border: 1px solid ",
					";\n  background-color: ",
					";\n",
				]);
				return (
					(Yt = function () {
						return e;
					}),
					e
				);
			}
			function qt() {
				var e = Object(u.a)([
					"\n  width: 100%;\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ",
					";\n  border: ",
					";\n  border-radius: ",
					";\n",
				]);
				return (
					(qt = function () {
						return e;
					}),
					e
				);
			}
			var Vt = l.default.div(
					qt(),
					function (e) {
						return e.padding;
					},
					function (e) {
						return e.border;
					},
					function (e) {
						return e.borderRadius;
					}
				),
				Ht = Vt,
				Wt = Object(l.default)(Vt)(
					Yt(),
					function (e) {
						return e.theme.colors.invertedContrast;
					},
					function (e) {
						return e.theme.colors.invertedContrast;
					}
				),
				Kt = Object(l.default)(Vt)(zt(), function (e) {
					return e.theme.colors.tertiary;
				}),
				Gt =
					(Object(l.default)(Vt)(Ft(), function (e) {
						return e.theme.colors.tertiary;
					}),
					Object(l.default)(Vt)(Lt(), function (e) {
						return e.theme.colors.binance;
					})),
				Qt = Object(l.default)(Vt)(Dt(), function (e) {
					return e.theme.colors.primary;
				}),
				Jt =
					(Object(l.default)(Vt)(
						Mt(),
						function (e) {
							return e.theme.colors.primaryDark;
						},
						function (e) {
							return e.theme.colors.primary;
						}
					),
					t(181));
			t(400);
			function Xt() {
				var e = Object(u.a)(["\n        min-height: ", "vh;\n      "]);
				return (
					(Xt = function () {
						return e;
					}),
					e
				);
			}
			function Zt() {
				var e = Object(u.a)(["\n        max-height: ", "vh;\n      "]);
				return (
					(Zt = function () {
						return e;
					}),
					e
				);
			}
			function $t() {
				var e = Object(u.a)([
					"\n  &[data-reach-dialog-content] {\n    margin: 0 0 2rem 0;\n    border: 1px solid ",
					";\n    background-color: ",
					";\n    box-shadow: 0 4px 8px 0 ",
					";\n    padding: 0px;\n    width: 80%;\n    overflow: hidden;\n\n    align-self: ",
					";\n\n    max-width: 420px;\n    ",
					"\n    ",
					"\n    display: flex;\n    border-radius: 20px;\n\n    ",
					" {\n      width: 65vw;\n    }\n    ",
					" {\n      width: 85vw;\n    }\n  }\n",
				]);
				return (
					($t = function () {
						return e;
					}),
					e
				);
			}
			function er() {
				var e = Object(u.a)([
					"\n  &[data-reach-dialog-overlay] {\n    z-index: 2;\n    background-color: transparent;\n    overflow: hidden;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0, 0, 0, 0.3);\n  }\n",
				]);
				return (
					(er = function () {
						return e;
					}),
					e
				);
			}
			var nr = Object(Qe.a)(Jt.b),
				tr = Object(l.default)(nr)(er()),
				rr = Object(Qe.a)(Jt.a),
				ar = Object(l.default)(function (e) {
					e.minHeight, e.maxHeight, e.mobile, e.isOpen;
					var n = Object(tn.a)(e, [
						"minHeight",
						"maxHeight",
						"mobile",
						"isOpen",
					]);
					return Object(r.jsx)(rr, Object(V.a)({}, n));
				}).attrs({ "aria-label": "dialog" })(
					$t(),
					function (e) {
						return e.theme.colors.invertedContrast;
					},
					function (e) {
						return e.theme.colors.invertedContrast;
					},
					Object(rn.b)(0.95, "#191326"),
					function (e) {
						return e.mobile ? "flex-end" : "center";
					},
					function (e) {
						var n = e.maxHeight;
						return n && Object(l.css)(Zt(), n);
					},
					function (e) {
						var n = e.minHeight;
						return n && Object(l.css)(Xt(), n);
					},
					function (e) {
						return e.theme.mediaQueries.lg;
					},
					function (e) {
						return e.theme.mediaQueries.sm;
					}
				);
			function ir(e) {
				var n = e.isOpen,
					t = e.onDismiss,
					a = e.minHeight,
					i = void 0 !== a && a,
					c = e.maxHeight,
					o = void 0 === c ? 50 : c,
					s = e.initialFocusRef,
					u = e.children,
					l = Object(Qe.c)(n, null, {
						config: { duration: 200 },
						from: { opacity: 0 },
						enter: { opacity: 1 },
						leave: { opacity: 0 },
					});
				return Object(r.jsx)(r.Fragment, {
					children: l.map(function (e) {
						var n = e.item,
							a = e.key,
							c = e.props;
						return (
							n &&
							Object(r.jsx)(
								tr,
								{
									style: c,
									onDismiss: t,
									initialFocusRef: s,
									children: Object(r.jsxs)(ar, {
										"aria-label": "dialog content",
										minHeight: i,
										maxHeight: o,
										mobile: g.isMobile,
										children: [
											!s && g.isMobile
												? Object(r.jsx)("div", { tabIndex: 1 })
												: null,
											u,
										],
									}),
								},
								a
							)
						);
					}),
				});
			}
			var cr = t.p + "static/media/blue-loader.a7172c15.svg";
			function or() {
				var e = Object(u.a)([
					"\n  align-items: center;\n  display: flex;\n\n  & > ",
					" {\n    flex: 1;\n  }\n",
				]);
				return (
					(or = function () {
						return e;
					}),
					e
				);
			}
			function sr() {
				var e = Object(u.a)([
					"\n  background-color: ",
					";\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n",
				]);
				return (
					(sr = function () {
						return e;
					}),
					e
				);
			}
			function ur() {
				var e = Object(u.a)(["\n  padding: 40px 0;\n"]);
				return (
					(ur = function () {
						return e;
					}),
					e
				);
			}
			function lr() {
				var e = Object(u.a)(["\n  padding: 24px;\n"]);
				return (
					(lr = function () {
						return e;
					}),
					e
				);
			}
			function dr() {
				var e = Object(u.a)(["\n  width: 100%;\n  overflow-y: auto;\n"]);
				return (
					(dr = function () {
						return e;
					}),
					e
				);
			}
			var br = l.default.div(dr()),
				pr = Object(l.default)(We)(lr()),
				fr = Object(l.default)(He)(ur()),
				jr = Object(l.default)(pr)(sr(), function (e) {
					return e.theme.colors.invertedContrast;
				}),
				mr = l.default.div(or(), s.m),
				hr = function (e) {
					var n = e.children,
						t = e.onDismiss;
					return Object(r.jsxs)(mr, {
						children: [
							Object(r.jsx)(s.m, { children: n }),
							Object(r.jsx)(s.n, {
								onClick: t,
								variant: "text",
								children: Object(r.jsx)(s.j, { color: "primary" }),
							}),
						],
					});
				};
			function yr() {
				var e = Object(u.a)(["\n  height: ", ";\n  width: ", ";\n"]);
				return (
					(yr = function () {
						return e;
					}),
					e
				);
			}
			var vr = Object(l.default)(On)(
					yr(),
					function (e) {
						return e.size;
					},
					function (e) {
						return e.size;
					}
				),
				Or = function (e) {
					var n = e.onDismiss,
						t = e.pendingText;
					return Object(r.jsx)(br, {
						children: Object(r.jsxs)(pr, {
							children: [
								Object(r.jsx)(hr, {
									onDismiss: n,
									children: "Waiting for confirmation",
								}),
								Object(r.jsx)(fr, {
									children: Object(r.jsx)(vr, {
										src: cr,
										alt: "loader",
										size: "90px",
									}),
								}),
								Object(r.jsxs)(We, {
									gap: "12px",
									justify: "center",
									children: [
										Object(r.jsx)(We, {
											gap: "12px",
											justify: "center",
											children: Object(r.jsx)(s.v, {
												fontSize: "14px",
												children: Object(r.jsx)("strong", { children: t }),
											}),
										}),
										Object(r.jsx)(s.v, {
											fontSize: "14px",
											children: "Confirm this transaction in your wallet",
										}),
									],
								}),
							],
						}),
					});
				},
				xr = t(496),
				gr = function (e) {
					var n = e.onDismiss,
						t = e.chainId,
						i = e.hash,
						c = Object(a.useContext)(l.ThemeContext);
					return Object(r.jsx)(br, {
						children: Object(r.jsxs)(pr, {
							children: [
								Object(r.jsx)(hr, {
									onDismiss: n,
									children: "Transaction submitted",
								}),
								Object(r.jsx)(fr, {
									children: Object(r.jsx)(xr.a, {
										strokeWidth: 0.5,
										size: 97,
										color: c.colors.primary,
									}),
								}),
								Object(r.jsxs)(We, {
									gap: "8px",
									justify: "center",
									children: [
										t &&
											i &&
											Object(r.jsx)(s.p, {
												href: nt(t, i, "transaction"),
												children: "View on bscscan",
											}),
										Object(r.jsx)(s.c, {
											onClick: n,
											mt: "20px",
											children: "Close",
										}),
									],
								}),
							],
						}),
					});
				},
				wr = function (e) {
					var n = e.isOpen,
						t = e.onDismiss,
						a = e.attemptingTxn,
						i = e.hash,
						c = e.pendingText,
						o = e.content,
						s = Se().chainId;
					return s
						? Object(r.jsx)(ir, {
								isOpen: n,
								onDismiss: t,
								maxHeight: 90,
								children: a
									? Object(r.jsx)(Or, { onDismiss: t, pendingText: c })
									: i
									? Object(r.jsx)(gr, { chainId: s, hash: i, onDismiss: t })
									: o(),
						  })
						: null;
				},
				Cr = function (e) {
					var n = e.title,
						t = e.bottomContent,
						a = e.onDismiss,
						i = e.topContent;
					return Object(r.jsxs)(br, {
						children: [
							Object(r.jsxs)(pr, {
								children: [
									Object(r.jsx)(hr, { onDismiss: a, children: n }),
									i(),
								],
							}),
							Object(r.jsx)(jr, { gap: "12px", children: t() }),
						],
					});
				},
				kr = t(497),
				Tr = function (e) {
					var n = e.message,
						t = e.onDismiss,
						i = Object(a.useContext)(l.ThemeContext);
					return Object(r.jsxs)(br, {
						children: [
							Object(r.jsxs)(pr, {
								children: [
									Object(r.jsx)(hr, { onDismiss: t, children: "Error" }),
									Object(r.jsxs)(We, {
										style: { marginTop: 20, padding: "2rem 0" },
										gap: "24px",
										justify: "center",
										children: [
											Object(r.jsx)(kr.a, {
												color: i.colors.failure,
												style: { strokeWidth: 1.5 },
												size: 64,
											}),
											Object(r.jsx)(s.v, {
												fontSize: "16px",
												color: "failure",
												style: { textAlign: "center", width: "85%" },
												children: n,
											}),
										],
									}),
								],
							}),
							Object(r.jsx)(jr, {
								gap: "12px",
								children: Object(r.jsx)(s.c, {
									onClick: t,
									children: "Dismiss",
								}),
							}),
						],
					});
				},
				Ir = wr,
				Er = { translations: [], setTranslations: function () {} },
				Nr = Object(a.createContext)(Er),
				Ar = /%(.*?)%/,
				Sr = function (e, n, t) {
					var r = e.find(function (e) {
						return e.data.stringId === n;
					});
					if (r) {
						var a = r.data.text;
						return a.includes("%")
							? (function (e, n) {
									var t = Ar.exec(e)[0],
										r = e.split(" ").indexOf(t),
										a = n.split(" ")[r];
									return e.replace(t, a);
							  })(a, t)
							: a;
					}
					return t;
				},
				Rr = function (e, n) {
					var t = Object(a.useContext)(Nr).translations;
					return "error" === t[0] ? n : t.length > 0 ? Sr(t, e, n) : void 0;
				},
				Ur = function () {
					var e = Object(a.useContext)(Nr).translations;
					return function (n, t) {
						return "error" === e[0] ? t : e.length > 0 ? Sr(e, n, t) : t;
					};
				},
				Br = function (e) {
					var n = e.translationId,
						t = e.children,
						a = Ur();
					return Object(r.jsx)(r.Fragment, { children: a(n, t) });
				};
			function Pr() {
				var e = Object(u.a)(["\n  margin-bottom: 40px;\n"]);
				return (
					(Pr = function () {
						return e;
					}),
					e
				);
			}
			var _r,
				Mr = l.default.div(Pr()),
				Dr = function (e) {
					var n = e.activeIndex,
						t = void 0 === n ? 0 : n;
					return Object(r.jsx)(Mr, {
						children: Object(r.jsxs)(s.d, {
							activeIndex: t,
							size: "sm",
							variant: "subtle",
							children: [
								Object(r.jsx)(s.e, {
									id: "swap-nav-link",
									to: "/swap",
									as: y.b,
									children: Object(r.jsx)(Br, {
										translationId: 8,
										children: "Swap",
									}),
								}),
								Object(r.jsx)(s.e, {
									id: "pool-nav-link",
									to: "/pool",
									as: y.b,
									children: Object(r.jsx)(Br, {
										translationId: 74,
										children: "Liquidity",
									}),
								}),
							],
						}),
					});
				},
				Lr = t(117),
				Fr = t(122),
				zr = t(169),
				Yr = new Lr.b(Fr),
				qr = (new Lr.b(zr), Yr),
				Vr = t(158),
				Hr = (function (e) {
					Object(S.a)(t, e);
					var n = Object(R.a)(t);
					function t(e, r) {
						var a;
						return (
							Object(N.a)(this, t),
							((a = n.call(
								this,
								e.chainId,
								e.address,
								e.decimals,
								e.symbol,
								e.name
							)).tokenInfo = void 0),
							(a.tags = void 0),
							(a.tokenInfo = e),
							(a.tags = r),
							a
						);
					}
					return (
						Object(A.a)(t, [
							{
								key: "logoURI",
								get: function () {
									return this.tokenInfo.logoURI;
								},
							},
						]),
						t
					);
				})(U.l),
				Wr =
					((_r = {}),
					Object(w.a)(_r, U.a.MAINNET, {}),
					Object(w.a)(_r, U.a.BSCTESTNET, {}),
					_r),
				Kr = "undefined" !== typeof WeakMap ? new WeakMap() : null;
			function Gr(e) {
				var n = Object(De.d)(function (e) {
					return e.lists.byUrl;
				});
				return Object(a.useMemo)(
					function () {
						var t;
						if (!e) return Wr;
						var r = null === (t = n[e]) || void 0 === t ? void 0 : t.current;
						if (!r) return Wr;
						try {
							return (function (e) {
								var n = null === Kr || void 0 === Kr ? void 0 : Kr.get(e);
								if (n) return n;
								var t = e.tokens.reduce(function (n, t) {
									var r,
										a,
										i,
										c =
											null !==
												(r =
													null === (a = t.tags) ||
													void 0 === a ||
													null ===
														(i = a.map(function (n) {
															var t;
															if (
																null === (t = e.tags) || void 0 === t
																	? void 0
																	: t[n]
															)
																return Object(V.a)(
																	Object(V.a)({}, e.tags[n]),
																	{},
																	{ id: n }
																);
														})) ||
													void 0 === i
														? void 0
														: i.filter(function (e) {
																return Boolean(e);
														  })) && void 0 !== r
												? r
												: [],
										o = new Hr(t, c);
									if (void 0 !== n[o.chainId][o.address])
										throw Error("Duplicate tokens.");
									return Object(V.a)(
										Object(V.a)({}, n),
										{},
										Object(w.a)(
											{},
											o.chainId,
											Object(V.a)(
												Object(V.a)({}, n[o.chainId]),
												{},
												Object(w.a)({}, o.address, o)
											)
										)
									);
								}, Object(V.a)({}, Wr));
								return null === Kr || void 0 === Kr || Kr.set(e, t), t;
							})(r);
						} catch (a) {
							return (
								console.error("Could not show token list due to error", a), Wr
							);
						}
					},
					[n, e]
				);
			}
			function Qr() {
				return Object(De.d)(function (e) {
					return e.lists.selectedListUrl;
				});
			}
			function Jr() {
				return Gr(Qr());
			}
			var Xr = /^0x[a-fA-F0-9]{40}$/,
				Zr = /^0x[a-f0-9]*$/;
			function $r(e) {
				if (!Xr.test(e.address))
					throw new Error("Invalid address: ".concat(e.address));
				if (!Zr.test(e.callData))
					throw new Error("Invalid hex: ".concat(e.callData));
				return "".concat(e.address, "-").concat(e.callData);
			}
			function ea(e) {
				var n = e.split("-");
				if (2 !== n.length) throw new Error("Invalid call key: ".concat(e));
				return { address: n[0], callData: n[1] };
			}
			var na = Object(Re.b)("multicall/addMulticallListeners"),
				ta = Object(Re.b)("multicall/removeMulticallListeners"),
				ra = Object(Re.b)("multicall/fetchingMulticallResults"),
				aa = Object(Re.b)("multicall/errorFetchingMulticallResults"),
				ia = Object(Re.b)("multicall/updateMulticallResults");
			function ca(e) {
				return -1 !== ["string", "number"].indexOf(typeof e);
			}
			function oa(e) {
				return (
					void 0 === e ||
					(Array.isArray(e) &&
						e.every(function (e) {
							return ca(e) || (Array.isArray(e) && e.every(ca));
						}))
				);
			}
			var sa = { valid: !1, blockNumber: void 0, data: void 0 },
				ua = { blocksPerFetch: 1 / 0 };
			function la(e, n) {
				var t = Se().chainId,
					r = Object(De.d)(function (e) {
						return e.multicall.callResults;
					}),
					i = Object(De.c)(),
					c = Object(a.useMemo)(
						function () {
							var n, t, r;
							return JSON.stringify(
								null !==
									(n =
										null === e ||
										void 0 === e ||
										null ===
											(t = e.filter(function (e) {
												return Boolean(e);
											})) ||
										void 0 === t ||
										null === (r = t.map($r)) ||
										void 0 === r
											? void 0
											: r.sort()) && void 0 !== n
									? n
									: []
							);
						},
						[e]
					);
				return (
					Object(a.useEffect)(
						function () {
							var e = JSON.parse(c);
							if (t && 0 !== e.length) {
								var r = e.map(function (e) {
									return ea(e);
								});
								return (
									i(na({ chainId: t, calls: r, options: n })),
									function () {
										i(ta({ chainId: t, calls: r, options: n }));
									}
								);
							}
						},
						[t, i, n, c]
					),
					Object(a.useMemo)(
						function () {
							return e.map(function (e) {
								var n;
								if (!t || !e) return sa;
								var a,
									i = null === (n = r[t]) || void 0 === n ? void 0 : n[$r(e)];
								return (
									(null === i || void 0 === i ? void 0 : i.data) &&
										"0x" !== (null === i || void 0 === i ? void 0 : i.data) &&
										(a = i.data),
									{
										valid: !0,
										data: a,
										blockNumber:
											null === i || void 0 === i ? void 0 : i.blockNumber,
									}
								);
							});
						},
						[r, e, t]
					)
				);
			}
			var da = {
					valid: !1,
					result: void 0,
					loading: !1,
					syncing: !1,
					error: !1,
				},
				ba = { valid: !0, result: void 0, loading: !0, syncing: !0, error: !1 };
			function pa(e, n, t, r) {
				if (!e) return da;
				var a = e.valid,
					i = e.data,
					c = e.blockNumber;
				if (!a) return da;
				if (a && !c) return ba;
				if (!n || !t || !r) return ba;
				var o = i && i.length > 2,
					s = (null !== c && void 0 !== c ? c : 0) < r,
					u = void 0;
				if (o && i)
					try {
						u = n.decodeFunctionResult(t, i);
					} catch (l) {
						return (
							console.debug("Result data parsing failed", t, i),
							{ valid: !0, loading: !1, error: !0, syncing: s, result: u }
						);
					}
				return { valid: !0, loading: !1, syncing: s, result: u, error: !o };
			}
			function fa(e, n, t, r) {
				var i = Object(a.useMemo)(
						function () {
							var t;
							return null === e ||
								void 0 === e ||
								null === (t = e.interface) ||
								void 0 === t
								? void 0
								: t.getFunction(n);
						},
						[e, n]
					),
					c = la(
						Object(a.useMemo)(
							function () {
								return e && i && t && t.length > 0
									? t.map(function (n) {
											return {
												address: e.address,
												callData: e.interface.encodeFunctionData(i, n),
											};
									  })
									: [];
							},
							[t, e, i]
						),
						r
					),
					o = Le();
				return Object(a.useMemo)(
					function () {
						return c.map(function (n) {
							return pa(
								n,
								null === e || void 0 === e ? void 0 : e.interface,
								i,
								o
							);
						});
					},
					[i, e, c, o]
				);
			}
			function ja(e, n, t, r, i) {
				var c = Object(a.useMemo)(
						function () {
							return n.getFunction(t);
						},
						[n, t]
					),
					o = Object(a.useMemo)(
						function () {
							return c && oa(r) ? n.encodeFunctionData(c, r) : void 0;
						},
						[r, n, c]
					),
					s = la(
						Object(a.useMemo)(
							function () {
								return c && e && e.length > 0 && o
									? e.map(function (e) {
											return e && o ? { address: e, callData: o } : void 0;
									  })
									: [];
							},
							[e, o, c]
						),
						i
					),
					u = Le();
				return Object(a.useMemo)(
					function () {
						return s.map(function (e) {
							return pa(e, n, c, u);
						});
					},
					[c, s, n, u]
				);
			}
			function ma(e, n, t, r) {
				var i = Object(a.useMemo)(
						function () {
							var t;
							return null === e ||
								void 0 === e ||
								null === (t = e.interface) ||
								void 0 === t
								? void 0
								: t.getFunction(n);
						},
						[e, n]
					),
					c = la(
						Object(a.useMemo)(
							function () {
								return e && i && oa(t)
									? [
											{
												address: e.address,
												callData: e.interface.encodeFunctionData(i, t),
											},
									  ]
									: [];
							},
							[e, i, t]
						),
						r
					)[0],
					o = Le();
				return Object(a.useMemo)(
					function () {
						return pa(
							c,
							null === e || void 0 === e ? void 0 : e.interface,
							i,
							o
						);
					},
					[c, e, i, o]
				);
			}
			var ha = t(140),
				ya = t.n(ha),
				va = Object(Re.b)("user/updateMatchesDarkMode"),
				Oa = Object(Re.b)("user/updateUserDarkMode"),
				xa = Object(Re.b)("user/updateUserExpertMode"),
				ga = Object(Re.b)("user/updateUserSlippageTolerance"),
				wa = Object(Re.b)("user/updateUserDeadline"),
				Ca = Object(Re.b)("user/addSerializedToken"),
				ka = Object(Re.b)("user/removeSerializedToken"),
				Ta = Object(Re.b)("user/addSerializedPair"),
				Ia = Object(Re.b)("user/removeSerializedPair"),
				Ea = Object(Re.b)("user/muteAudio"),
				Na = Object(Re.b)("user/unmuteAudio"),
				Aa = "IS_DARK";
			function Sa(e) {
				return {
					chainId: e.chainId,
					address: e.address,
					decimals: e.decimals,
					symbol: e.symbol,
					name: e.name,
				};
			}
			function Ra(e) {
				return new U.l(e.chainId, e.address, e.decimals, e.symbol, e.name);
			}
			function Ua() {
				return Object(De.d)(function (e) {
					return e.user.userExpertMode;
				});
			}
			function Ba() {
				var e = Object(De.c)();
				return [
					Object(De.d)(function (e) {
						return e.user.userSlippageTolerance;
					}),
					Object(a.useCallback)(
						function (n) {
							e(ga({ userSlippageTolerance: n }));
						},
						[e]
					),
				];
			}
			function Pa() {
				var e = Object(De.c)();
				return [
					Object(De.d)(function (e) {
						return e.user.userDeadline;
					}),
					Object(a.useCallback)(
						function (n) {
							e(wa({ userDeadline: n }));
						},
						[e]
					),
				];
			}
			function _a() {
				var e = Object(De.c)();
				return Object(a.useCallback)(
					function (n) {
						e(Ca({ serializedToken: Sa(n) }));
					},
					[e]
				);
			}
			function Ma() {
				var e = Se().chainId,
					n = Object(De.d)(function (e) {
						return e.user.tokens;
					});
				return Object(a.useMemo)(
					function () {
						var t;
						return e
							? Object.values(null !== (t = n[e]) && void 0 !== t ? t : {}).map(
									Ra
							  )
							: [];
					},
					[n, e]
				);
			}
			function Da(e) {
				return { token0: Sa(e.token0), token1: Sa(e.token1) };
			}
			function La(e) {
				var n = Object(h.a)(e, 2),
					t = n[0],
					r = n[1];
				return new U.l(
					t.chainId,
					U.g.getAddress(t, r),
					18,
					"Cake-LP",
					"Pancake LPs"
				);
			}
			var Fa,
				za,
				Ya = t(110),
				qa = t(268),
				Va = t(269),
				Ha = t(235),
				Wa = "0x16D4F26C15f3658ec65B1126ff27DD3dF2a2996b",
				Ka = (t(270), t(271)),
				Ga = t(236),
				Qa =
					((Fa = {}),
					Object(w.a)(
						Fa,
						U.a.MAINNET,
						"0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb"
					),
					Object(w.a)(
						Fa,
						U.a.BSCTESTNET,
						"0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A"
					),
					Fa),
				Ja = t(170),
				Xa = t(171),
				Za =
					((za = {}),
					Object(w.a)(
						za,
						U.a.MAINNET,
						"0xC07d4604400139108BbdB3076636365A385879eF"
					),
					Object(w.a)(
						za,
						U.a.BSCTESTNET,
						"0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F"
					),
					za);
			new Lr.b(Xa), new Lr.b(Ja);
			function $a(e, n) {
				var t =
						!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
					r = Se(),
					i = r.library,
					c = r.account;
				return Object(a.useMemo)(
					function () {
						if (!e || !n || !i) return null;
						try {
							return it(e, n, i, t && c ? c : void 0);
						} catch (r) {
							return console.error("Failed to get contract", r), null;
						}
					},
					[e, n, i, t, c]
				);
			}
			function ei() {
				var e = Se().chainId;
				return $a(e && Za[e], Xa, !1);
			}
			function ni(e, n) {
				return $a(e, Ja, n);
			}
			function ti(e, n) {
				return $a(e, Fr, n);
			}
			function ri(e) {
				var n = Se().chainId;
				if (n)
					switch (n) {
						case U.a.MAINNET:
						case U.a.BSCTESTNET:
					}
				return $a(undefined, qa, e);
			}
			function ai(e, n) {
				return $a(e, Va, n);
			}
			function ii() {
				var e = Se().chainId;
				return $a(e && Qa[e], Ga, !1);
			}
			function ci() {
				var e = Se().chainId,
					n = Ma(),
					t = Jr();
				return Object(a.useMemo)(
					function () {
						return e
							? n.reduce(function (e, n) {
									return (e[n.address] = n), e;
							  }, Object(V.a)({}, t[e]))
							: {};
					},
					[e, n, t]
				);
			}
			var oi = /^0x[a-fA-F0-9]{64}$/;
			function si(e, n, t) {
				return e && e.length > 0 ? e : n && oi.test(n) ? Object(Vr.b)(n) : t;
			}
			function ui(e) {
				var n = Se().chainId,
					t = ci(),
					r = $n(e),
					i = ti(r || void 0, !1),
					c = (function (e, n) {
						return $a(e, zr, n);
					})(r || void 0, !1),
					o = r ? t[r] : void 0,
					s = ma(o ? void 0 : i, "name", void 0, ua),
					u = ma(o ? void 0 : c, "name", void 0, ua),
					l = ma(o ? void 0 : i, "symbol", void 0, ua),
					d = ma(o ? void 0 : c, "symbol", void 0, ua),
					b = ma(o ? void 0 : i, "decimals", void 0, ua);
				return Object(a.useMemo)(
					function () {
						if (o) return o;
						if (n && r) {
							if (b.loading || l.loading || s.loading) return null;
							var e, t, a, i;
							if (b.result)
								return new U.l(
									n,
									r,
									b.result[0],
									si(
										null === (e = l.result) || void 0 === e ? void 0 : e[0],
										null === (t = d.result) || void 0 === t ? void 0 : t[0],
										"UNKNOWN"
									),
									si(
										null === (a = s.result) || void 0 === a ? void 0 : a[0],
										null === (i = u.result) || void 0 === i ? void 0 : i[0],
										"Unknown Token"
									)
								);
						}
					},
					[
						r,
						n,
						b.loading,
						b.result,
						l.loading,
						l.result,
						d.result,
						o,
						s.loading,
						s.result,
						u.result,
					]
				);
			}
			function li(e) {
				var n =
						"ETH" === (null === e || void 0 === e ? void 0 : e.toUpperCase()),
					t = ui(n ? void 0 : e);
				return n ? U.d : t;
			}
			function di(e) {
				var n = ii(),
					t = Object(a.useMemo)(
						function () {
							return e
								? e
										.map($n)
										.filter(function (e) {
											return !1 !== e;
										})
										.sort()
								: [];
						},
						[e]
					),
					r = fa(
						n,
						"getEthBalance",
						t.map(function (e) {
							return [e];
						})
					);
				return Object(a.useMemo)(
					function () {
						return t.reduce(function (e, n, t) {
							var a,
								i,
								c =
									null === r ||
									void 0 === r ||
									null === (a = r[t]) ||
									void 0 === a ||
									null === (i = a.result) ||
									void 0 === i
										? void 0
										: i[0];
							return c && (e[n] = U.c.ether(U.f.BigInt(c.toString()))), e;
						}, {});
					},
					[t, r]
				);
			}
			function bi(e, n) {
				var t = Object(a.useMemo)(
						function () {
							var e;
							return null !==
								(e =
									null === n || void 0 === n
										? void 0
										: n.filter(function (e) {
												return (
													!1 !==
													$n(null === e || void 0 === e ? void 0 : e.address)
												);
										  })) && void 0 !== e
								? e
								: [];
						},
						[n]
					),
					r = ja(
						Object(a.useMemo)(
							function () {
								return t.map(function (e) {
									return e.address;
								});
							},
							[t]
						),
						qr,
						"balanceOf",
						[e]
					),
					i = Object(a.useMemo)(
						function () {
							return r.some(function (e) {
								return e.loading;
							});
						},
						[r]
					);
				return [
					Object(a.useMemo)(
						function () {
							return e && t.length > 0
								? t.reduce(function (e, n, t) {
										var a,
											i,
											c =
												null === r ||
												void 0 === r ||
												null === (a = r[t]) ||
												void 0 === a ||
												null === (i = a.result) ||
												void 0 === i
													? void 0
													: i[0],
											o = c ? U.f.BigInt(c.toString()) : void 0;
										return o && (e[n.address] = new U.m(n, o)), e;
								  }, {})
								: {};
						},
						[e, t, r]
					),
					i,
				];
			}
			function pi(e, n) {
				return bi(e, n)[0];
			}
			function fi(e, n) {
				var t = pi(e, [n]);
				if (n) return t[n.address];
			}
			function ji(e, n) {
				var t = Object(a.useMemo)(
						function () {
							var e;
							return null !==
								(e =
									null === n || void 0 === n
										? void 0
										: n.filter(function (e) {
												return e instanceof U.l;
										  })) && void 0 !== e
								? e
								: [];
						},
						[n]
					),
					r = pi(e, t),
					i = di(
						Object(a.useMemo)(
							function () {
								var e;
								return (
									null !==
										(e =
											null === n || void 0 === n
												? void 0
												: n.some(function (e) {
														return e === U.d;
												  })) &&
									void 0 !== e &&
									e
								);
							},
							[n]
						)
							? [e]
							: []
					);
				return Object(a.useMemo)(
					function () {
						var t;
						return null !==
							(t =
								null === n || void 0 === n
									? void 0
									: n.map(function (n) {
											if (e && n)
												return n instanceof U.l
													? r[n.address]
													: n === U.d
													? i[e]
													: void 0;
									  })) && void 0 !== t
							? t
							: [];
					},
					[e, n, i, r]
				);
			}
			function mi(e, n) {
				return ji(e, [n])[0];
			}
			function hi(e, n) {
				var t = Object(a.useState)(n && n(e) ? e : void 0),
					r = Object(h.a)(t, 2),
					i = r[0],
					c = r[1];
				return (
					Object(a.useEffect)(
						function () {
							c(function (t) {
								return !n || n(e) ? e : t;
							});
						},
						[n, e]
					),
					i
				);
			}
			function yi(e) {
				return null !== e && void 0 !== e;
			}
			var vi = t(179),
				Oi = t.n(vi),
				xi = t(128),
				gi = t(111);
			var wi = new TextDecoder();
			function Ci(e) {
				var n = (function (e) {
						if ((e = e.startsWith("0x") ? e.substr(2) : e).length % 2 !== 0)
							throw new Error("hex must have length that is multiple of 2");
						for (var n = new Uint8Array(e.length / 2), t = 0; t < n.length; t++)
							n[t] = parseInt(e.substr(2 * t, 2), 16);
						return n;
					})(e),
					t = Object(xi.getCodec)(n);
				switch (t) {
					case "ipfs-ns":
						var r = Object(xi.rmPrefix)(n),
							a = new Oi.a(r);
						return "ipfs://".concat(Object(gi.toB58String)(a.multihash));
					case "ipns-ns":
						var i = Object(xi.rmPrefix)(n),
							c = new Oi.a(i),
							o = Object(gi.decode)(c.multihash);
						return "identity" === o.name
							? "ipns://".concat(wi.decode(o.digest).trim())
							: "ipns://".concat(Object(gi.toB58String)(c.multihash));
					default:
						throw new Error("Unrecognized codec: ".concat(t));
				}
			}
			var ki = /^(([a-zA-Z0-9]+\.)+)eth(\/.*)?$/;
			function Ti(e) {
				var n = e.match(ki);
				if (n)
					return {
						ensName: "".concat(n[1].toLowerCase(), "eth"),
						ensPath: n[3],
					};
			}
			function Ii(e) {
				var n, t;
				switch (e.split(":")[0].toLowerCase()) {
					case "https":
						return [e];
					case "http":
						return ["https" + e.substr(4), e];
					case "ipfs":
						var r =
							null === (n = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === n
								? void 0
								: n[2];
						return [
							"https://cloudflare-ipfs.com/ipfs/".concat(r, "/"),
							"https://ipfs.io/ipfs/".concat(r, "/"),
						];
					case "ipns":
						var a =
							null === (t = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === t
								? void 0
								: t[2];
						return [
							"https://cloudflare-ipfs.com/ipns/".concat(a, "/"),
							"https://ipfs.io/ipns/".concat(a, "/"),
						];
					default:
						return [];
				}
			}
			var Ei = t(90);
			function Ni(e) {
				return /^0x0*$/.test(e);
			}
			function Ai(e) {
				var n = Object(a.useMemo)(
						function () {
							return e ? Ti(e) : void 0;
						},
						[e]
					),
					t = (function (e) {
						var n,
							t,
							r,
							i = Object(a.useMemo)(
								function () {
									if (!e) return [void 0];
									try {
										return e ? [Object(Ei.namehash)(e)] : [void 0];
									} catch (n) {
										return [void 0];
									}
								},
								[e]
							),
							c = ma(ri(!1), "resolver", i),
							o = null === (n = c.result) || void 0 === n ? void 0 : n[0],
							s = ma(ai(o && Ni(o) ? void 0 : o, !1), "contenthash", i);
						return {
							contenthash:
								null !==
									(t =
										null === (r = s.result) || void 0 === r ? void 0 : r[0]) &&
								void 0 !== t
									? t
									: null,
							loading: c.loading || s.loading,
						};
					})(null === n || void 0 === n ? void 0 : n.ensName);
				return Object(a.useMemo)(
					function () {
						return n
							? t.contenthash
								? Ii(Ci(t.contenthash))
								: []
							: e
							? Ii(e)
							: [];
					},
					[n, t.contenthash, e]
				);
			}
			var Si = t(498),
				Ri = {};
			function Ui(e) {
				var n = e.srcs,
					t = e.alt,
					i = Object(tn.a)(e, ["srcs", "alt"]),
					c = Object(a.useState)(0),
					o = Object(h.a)(c, 2)[1],
					s = n.find(function (e) {
						return !Ri[e];
					});
				return s
					? Object(r.jsx)(
							"img",
							Object(V.a)(
								Object(V.a)({}, i),
								{},
								{
									alt: t,
									src: s,
									onError: function () {
										s && (Ri[s] = !0),
											o(function (e) {
												return e + 1;
											});
									},
								}
							)
					  )
					: Object(r.jsx)(Si.a, Object(V.a)({}, i));
			}
			function Bi() {
				var e = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n"]);
				return (
					(Bi = function () {
						return e;
					}),
					e
				);
			}
			var Pi = Object(l.default)(Ui)(
				Bi(),
				function (e) {
					return e.size;
				},
				function (e) {
					return e.size;
				}
			);
			function _i(e) {
				var n = e.logoURI,
					t = e.style,
					a = e.size,
					i = void 0 === a ? "24px" : a,
					c = e.alt,
					o = Ai(n);
				return Object(r.jsx)(Pi, { alt: c, size: i, srcs: o, style: t });
			}
			var Mi = t(505);
			function Di(e, n) {
				var t =
						!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
					r = Object(a.useRef)();
				Object(a.useEffect)(
					function () {
						r.current = e;
					},
					[e]
				),
					Object(a.useEffect)(
						function () {
							function e() {
								var e = r.current;
								e && e();
							}
							if (null !== n) {
								t && e();
								var a = setInterval(e, n);
								return function () {
									return clearInterval(a);
								};
							}
						},
						[n, t]
					);
			}
			var Li = t(148);
			function Fi() {
				var e = Object(u.a)([
					"\n  width: 8px;\n  height: 8px;\n  z-index: 9998;\n\n  ::before {\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    z-index: 9998;\n\n    content: '';\n    border: 1px solid ",
					";\n    transform: rotate(45deg);\n    background: ",
					";\n  }\n\n  &.arrow-top {\n    bottom: -5px;\n    ::before {\n      border-top: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-bottom {\n    top: -5px;\n    ::before {\n      border-bottom: none;\n      border-right: none;\n    }\n  }\n\n  &.arrow-left {\n    right: -5px;\n\n    ::before {\n      border-bottom: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-right {\n    left: -5px;\n    ::before {\n      border-right: none;\n      border-top: none;\n    }\n  }\n",
				]);
				return (
					(Fi = function () {
						return e;
					}),
					e
				);
			}
			function zi() {
				var e = Object(u.a)(["\n  display: inline-block;\n"]);
				return (
					(zi = function () {
						return e;
					}),
					e
				);
			}
			function Yi() {
				var e = Object(u.a)([
					"\n  z-index: 9999;\n\n  visibility: ",
					";\n  opacity: ",
					";\n  transition: visibility 150ms linear, opacity 150ms linear;\n\n  background: ",
					";\n  border: 1px solid ",
					";\n  box-shadow: 0 4px 8px 0 ",
					";\n  color: ",
					";\n  border-radius: 8px;\n",
				]);
				return (
					(Yi = function () {
						return e;
					}),
					e
				);
			}
			var qi = l.default.div(
					Yi(),
					function (e) {
						return e.show ? "visible" : "hidden";
					},
					function (e) {
						return e.show ? 1 : 0;
					},
					function (e) {
						return e.theme.colors.invertedContrast;
					},
					function (e) {
						return e.theme.colors.tertiary;
					},
					Object(rn.b)(0.9, "#2F80ED"),
					function (e) {
						return e.theme.colors.textSubtle;
					}
				),
				Vi = l.default.div(zi()),
				Hi = l.default.div(
					Fi(),
					function (e) {
						return e.theme.colors.tertiary;
					},
					function (e) {
						return e.theme.colors.invertedContrast;
					}
				);
			function Wi(e) {
				var n,
					t,
					i = e.content,
					c = e.show,
					o = e.children,
					s = e.placement,
					u = void 0 === s ? "auto" : s,
					l = Object(a.useState)(null),
					d = Object(h.a)(l, 2),
					b = d[0],
					p = d[1],
					f = Object(a.useState)(null),
					j = Object(h.a)(f, 2),
					m = j[0],
					y = j[1],
					v = Object(a.useState)(null),
					O = Object(h.a)(v, 2),
					x = O[0],
					g = O[1],
					w = Object(Mi.a)(b, m, {
						placement: u,
						strategy: "fixed",
						modifiers: [
							{ name: "offset", options: { offset: [8, 8] } },
							{ name: "arrow", options: { element: x } },
						],
					}),
					C = w.styles,
					k = w.update,
					T = w.attributes;
				return (
					Di(
						Object(a.useCallback)(
							function () {
								k && k();
							},
							[k]
						),
						c ? 100 : null
					),
					Object(r.jsxs)(r.Fragment, {
						children: [
							Object(r.jsx)(Vi, { ref: p, children: o }),
							Object(r.jsx)(Li.a, {
								children: Object(r.jsxs)(
									qi,
									Object(V.a)(
										Object(V.a)({ show: c, ref: y, style: C.popper }, T.popper),
										{},
										{
											children: [
												i,
												Object(r.jsx)(
													Hi,
													Object(V.a)(
														{
															className: "arrow-".concat(
																null !==
																	(n =
																		null === (t = T.popper) || void 0 === t
																			? void 0
																			: t["data-popper-placement"]) &&
																	void 0 !== n
																	? n
																	: ""
															),
															ref: g,
															style: C.arrow,
														},
														T.arrow
													)
												),
											],
										}
									)
								),
							}),
						],
					})
				);
			}
			function Ki() {
				var e = Object(u.a)([
					"\n  width: 228px;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  font-weight: 400;\n",
				]);
				return (
					(Ki = function () {
						return e;
					}),
					e
				);
			}
			var Gi = l.default.div(Ki());
			function Qi(e) {
				var n = e.text,
					t = Object(tn.a)(e, ["text"]);
				return Object(r.jsx)(
					Wi,
					Object(V.a)({ content: Object(r.jsx)(Gi, { children: n }) }, t)
				);
			}
			function Ji(e) {
				var n = e.children,
					t = Object(tn.a)(e, ["children"]),
					i = Object(a.useState)(!1),
					c = Object(h.a)(i, 2),
					o = c[0],
					s = c[1],
					u = Object(a.useCallback)(
						function () {
							return s(!0);
						},
						[s]
					),
					l = Object(a.useCallback)(
						function () {
							return s(!1);
						},
						[s]
					);
				return Object(r.jsx)(
					Qi,
					Object(V.a)(
						Object(V.a)({}, t),
						{},
						{
							show: o,
							children: Object(r.jsx)("div", {
								onMouseEnter: u,
								onMouseLeave: l,
								children: n,
							}),
						}
					)
				);
			}
			function Xi() {
				var e = Object(u.a)([
					"\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n  background-color: ",
					";\n  color: ",
					";\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n",
				]);
				return (
					(Xi = function () {
						return e;
					}),
					e
				);
			}
			var Zi = l.default.div(
				Xi(),
				function (e) {
					return e.theme.colors.invertedContrast;
				},
				function (e) {
					return e.theme.colors.textSubtle;
				}
			);
			function $i(e) {
				var n = e.text,
					t = Object(a.useState)(!1),
					i = Object(h.a)(t, 2),
					c = i[0],
					o = i[1],
					s = Object(a.useCallback)(
						function () {
							return o(!0);
						},
						[o]
					),
					u = Object(a.useCallback)(
						function () {
							return o(!1);
						},
						[o]
					);
				return Object(r.jsx)("span", {
					style: { marginLeft: 4 },
					children: Object(r.jsx)(Qi, {
						text: n,
						show: c,
						children: Object(r.jsx)(Zi, {
							onClick: s,
							onMouseEnter: s,
							onMouseLeave: u,
							children: Object(r.jsx)(Si.a, { size: 16 }),
						}),
					}),
				});
			}
			function ec() {
				var e = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n"]);
				return (
					(ec = function () {
						return e;
					}),
					e
				);
			}
			var nc = Object(l.default)(Ui)(
				ec(),
				function (e) {
					return e.size;
				},
				function (e) {
					return e.size;
				}
			);
			function tc() {
				var e = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n"]);
				return (
					(tc = function () {
						return e;
					}),
					e
				);
			}
			function rc() {
				var e = Object(u.a)([
					"\n  width: ",
					";\n  height: ",
					";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  border-radius: 24px;\n",
				]);
				return (
					(rc = function () {
						return e;
					}),
					e
				);
			}
			var ac = function (e) {
					return "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/".concat(
						e,
						"/logo.png"
					);
				},
				ic = l.default.img(
					rc(),
					function (e) {
						return e.size;
					},
					function (e) {
						return e.size;
					}
				),
				cc = Object(l.default)(Ui)(
					tc(),
					function (e) {
						return e.size;
					},
					function (e) {
						return e.size;
					}
				);
			function oc(e) {
				var n,
					t,
					i = e.currency,
					c = e.size,
					o = void 0 === c ? "24px" : c,
					s = e.style,
					u = Ai(i instanceof Hr ? i.logoURI : void 0),
					l = Object(a.useMemo)(
						function () {
							return i === U.d
								? []
								: i instanceof U.l
								? i instanceof Hr
									? [].concat(Object(oe.a)(u), [
											"/images/coins/".concat(
												null !==
													(n =
														null === i || void 0 === i ? void 0 : i.symbol) &&
													void 0 !== n
													? n
													: "token",
												".png"
											),
											ac(i.address),
									  ])
									: [
											"/images/coins/".concat(
												null !==
													(e =
														null === i || void 0 === i ? void 0 : i.symbol) &&
													void 0 !== e
													? e
													: "token",
												".png"
											),
											ac(i.address),
									  ]
								: [];
							var e, n;
						},
						[i, u]
					);
				return i === U.d
					? Object(r.jsx)(ic, {
							src:
								"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAm9SURBVHgB7Z0/bFxFHsd/v3m7tsNyud3iqA6xdCelOLu403FXYBdHwlEQpIOKE8khREERDAJEFbtCAkFCAQ3/TEETkEiQQmIamwIKKOImdTaCBijWRNgx2PuG+c3L2zyv972deTNvZtbJR7K92uxm932/M/Ob+b35gxAo3U+bTZjamgbEaYbsHg68DYDihzfFc03g0Nz1BoR14Hxd/FuH/iJgJ+bxVfF4Dbam1lqPrK9DgCAEQiL49lGGcD9HPpuIbZU1RFiLe/AlQG+19eBWBwLAqwFS9AO/HkPGHhYlehZcgrDKe/ChbzO8GNC9MDWLUXTSuei58LNkRus/m2fBMc4M6Jd2xBMVNC+26PAYFlsPbiyBI5wY8PMXB05wYAt7Ame4ODOiUgNkU8PYBwGX+FFUbkQlBgjh21hjpyDGo7APEL2npbjXW6wiWFs34Npy44kY4fQYNTeqVFIbrBlAQZbdsX2SAzwL+xhkcDr+pb5oa2BnxQDZ5DC2MsZtvS6iNvTmbDRJDAzpftGYFn36S7eQ+IQocNFK93xjGgwxMoDae+RwaR+29yqIjgZcIg3AgNIGUN8+BliCWxzSoHvxQOm4VyoGyIEVZ6fhNn04j+dbR65ra6JtgOxmBlLyL3foN8KhNocQEM3JsYOHNz7UeY+WATLgUpsfACT+fxfqQJfwycJ2MCbwHZhpPbSxpvp65Rggu5qcfwoBkIp/bQPFT/L4cieMWxsiMK+QVqqvVzKABlmh9POz4qcEZkJTdlEp+6uAkgE0wg1V/JTATGizO0mz0Yz8tt0LDXHHCj4AzxSJn+VgA4KJCSpBufBqQkkxqIqfEpAJ6yJlMVOUsihsghjdNgRsg0d0xScCao4odp4qekHuNwyh6SkjfpZQagKPUSTuflkd9m+5NQAZVwoiVWEqPhFKTRBa5hbkoQZQ6ffZ9NgQPyUQE9p5+aKh32p9+Y4rvgywKX6WAJqjdb5Zv3fwRs6eGuCz9FclPhFATZDTcgaf3GOAr7a/SvFTfJuAyE4MPrfLgO7yH476KP0uxE/xbEK7e+HO2ewTuwxA6Bnd3SmDifjPP9qTP7r4NAGj3S1M/xsko97oCjjEVPznHkvEf+NMBK9/HIEuvgKzCMatNBhnakA0Cw6xJT5Bj8eqJmSCcd8ARHDW/NgUP2WcTJDT8dPH9Mtl81OF+FnGpTlKm6EbNcBd83NyqVaZ+IRJTZh/qwbOmNqW82alASyC+8ER77+wI0pZrPWepx5SEz+ljAl3/4nDey/ugCtoKZb8S784B+MZXqokVV3dhMdme7BwTL9E65hA4n+8uCP/uoJjsjoIuyvifu9v211wTBL8aiIm5N+SIPFPPaMvfpZRMcGH+CkUBxhsbTkr/VlG1QQb4hNFNcGn+JKpnWlG63ChAr77cfRr8kxQFZ8+Q+VzhpmgI77KZ5QCe8IAYG2wDHU1H3ixLnoVo7uDgyboiE/d2UfFj64JOuLPvx2Ja5moaJzA2tHL/6s/Laz4C1gi28+n9v37nwCO/L34QicnAB7+Vyz/Lh5TF//7nxCubSIsf8vg8N9i+GOj+H33HeLiNRxefjxWFv/MSgS/bgOc+zqCuekY7rI6D5z/gOsXGyuAdtbr5g2ybLXnRFb8LLJUi4HU3XeBFVLxs1gfrCGsiRhAezCYUzTCPbMaiQGY/uh0kDzx5b+J51Sbo1FQr2lQfMJ62oJDk8mNLwxRSS+8e75ciiClSPz+ayyYQN+Ruq55WDZBGGC4ukUnt1M2T6Mifv+1BiaMEj/FoglNoyVKZRJruiboiN9/TwkTVMVPsWWC4SK9ch+OOjEMDS5Q471YKq6aB2MjA6g3QH34gw31L6Ka1Uyh3s0nos/+Z43RapkRrm4Cj645Gb+YmcDkTlMG6JigK36Kjgkm6QVVE2yJLxD3A2ibL0NUTCgrfoqKCTZyO6NMsCg+QTdk0MqS+yITaCBmIn5KkQk2E2t5JlgWn0Io5YJ5BywxzASd3M47n4/uhQwzQUf8d86zUgk86+IDzZrmP0cvPT5xn+gs/AMsQbmSuWkucidM5nd0EmuffcVkx+qfh4ovknI+lF+6+A2Tj1XFp67mKx/VtHJH1I+6fBWti5+Ay0izdhGLFxGUgfriqqnewX6+ajD87sZ7VMXP9vN1ckeq16ILLe5GmiqHjK+AB2gw8+8Xhg+yyt5cH0beIMt2Ak8XWrjBYKqmvKjYJulIMm+EWzZtMUjRCNdmAq8UW7U11pqjKXL2ArEKqsN4UxNU0gveTBCp6P68IB7TbrJu0M2hlDVBJ7fjwwSMQbY8N1IRuAqO+P+rNe0Elq4Juok1gkx48rU6uCLmSaFPDJiqO9sxdvF4Tyt3lKJqQhnxCfpOp55xNzGLtkym39IAGQc4rIIDyiTwUkaZYCJ+Nf38HBD6+1X3s6Ec4nPgiCpMGBvxBcmm4Qk309GTk0vgEJsmjJP4CUnzQ+yKhjZnSKhCAZmmKJaZMZ1dIaOLL/E55+daRzb7Owrvumpfo2ITE8rgr+RTU88faR2+uU3+niv2tUjblQk+xRd0moc37s0+seeWpKgib4IHTGKCKp7FpwHv4uBze4qbnK6+vX3F12asVdUE3+LDkNJP7KkBNCbgO3udckUVNSEA8YeWfiK3mPncsIOwVRNCEB9ySj+ROy2Fx+w4eMRGTQhE/NzST+QakOzwxJ2fKpTFxIRQxEcOS0WHPhROzOJxPG86b8iUMiaEIr6gE/NeYTwtNIASRiJvMQ+e0TEhIPEhOfIkSbrlMXJqIlUfztHL2CCLiglBiS80UzlvRm1u6GRtwfVty2EUmRCS+IIOXK8tqLxQyQA5NojjOd/xgBhmQmjiy/NlFA/5GePt65NxAhGQ+LQCfqb1gPr29dqjnFD2kibSe8vBiB/Dcd1zxkoNM7ufN57FCKzPphtnOIf51pGN6o8wSbltwk3Kik8YJVpCao58UabZyWKc800CMx1tgm24lRA9QhF55nQC7vD/xgK3jzIsj/FRhoRMWUxMzIQwYq4auka+WZ+xdbSt9RuwSVzgQZw5YxVqckReLNjjbLMkxzhFCyJAPwH7An6WMsNjcaBzln1QG0Rbj8fzTr+wgZOJOGNnBDU3lEou2bfX+yiHjIERHc7jN+H65JKtE7NH4dSAFNomP9mpHY9CCHBYFb2bxSqbmjy8GJByI1jPyn2rHc9JlaLTjHCHpX0YXg3IkpohHs6K3tNfxV/LuznyDnJclStTtupnfYqeJRgDBpGHYU7tTNPWjhCzNkb8HpFsb8ot1miXr8GZe3SzSO57gXLRIe/hVWBxB3i0RqsRQxF8kN8BnU0CGHrzsa8AAAAASUVORK5CYII=",
							size: o,
							style: s,
					  })
					: (null === i || void 0 === i ? void 0 : i.symbol)
					? Object(r.jsx)(nc, {
							size: o,
							srcs: l,
							alt: "".concat(
								null !== (n = null === i || void 0 === i ? void 0 : i.symbol) &&
									void 0 !== n
									? n
									: "token",
								" logo"
							),
							style: s,
					  })
					: Object(r.jsx)(cc, {
							size: o,
							srcs: l,
							alt: "".concat(
								null !== (t = null === i || void 0 === i ? void 0 : i.symbol) &&
									void 0 !== t
									? t
									: "token",
								" logo"
							),
							style: s,
					  });
			}
			function sc() {
				var e = Object(u.a)([
					"\n  border: 1px solid ",
					";\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n\n  align-items: center;\n  :hover {\n    cursor: ",
					";\n    background-color: ",
					";\n  }\n\n  background-color: ",
					";\n  opacity: ",
					";\n",
				]);
				return (
					(sc = function () {
						return e;
					}),
					e
				);
			}
			var uc = l.default.div(
				sc(),
				function (e) {
					var n = e.theme;
					return e.disable ? "transparent" : n.colors.tertiary;
				},
				function (e) {
					return !e.disable && "pointer";
				},
				function (e) {
					var n = e.theme;
					return !e.disable && n.colors.invertedContrast;
				},
				function (e) {
					var n = e.theme;
					return e.disable && n.colors.tertiary;
				},
				function (e) {
					return e.disable && "0.4";
				}
			);
			function lc(e) {
				var n = e.chainId,
					t = e.onSelect,
					a = e.selectedCurrency;
				return Object(r.jsxs)(We, {
					gap: "md",
					children: [
						Object(r.jsxs)(Yn, {
							children: [
								Object(r.jsx)(s.v, {
									fontSize: "14px",
									children: "Common bases",
								}),
								Object(r.jsx)($i, {
									text: "These tokens are commonly paired with other tokens.",
								}),
							],
						}),
						Object(r.jsxs)(Yn, {
							gap: "4px",
							children: [
								Object(r.jsxs)(uc, {
									onClick: function () {
										(a && Object(U.q)(a, U.d)) || t(U.d);
									},
									disable: a === U.d,
									children: [
										Object(r.jsx)(oc, {
											currency: U.d,
											style: { marginRight: 8 },
										}),
										Object(r.jsx)(s.v, { children: "BNB" }),
									],
								}),
								(n ? me[n] : []).map(function (e) {
									var n = a instanceof U.l && a.address === e.address;
									return Object(r.jsxs)(
										uc,
										{
											onClick: function () {
												return !n && t(e);
											},
											disable: n,
											children: [
												Object(r.jsx)(oc, {
													currency: e,
													style: { marginRight: 8 },
												}),
												Object(r.jsx)(s.v, { children: e.symbol }),
											],
										},
										e.address
									);
								}),
							],
						}),
					],
				});
			}
			var dc = t(280);
			function bc() {
				var e = Object(u.a)([
					"\n  width: 100%;\n  height: 1px;\n  background-color: ",
					";\n",
				]);
				return (
					(bc = function () {
						return e;
					}),
					e
				);
			}
			function pc() {
				var e = Object(u.a)([
					"\n  width: 100%;\n  height: 1px;\n  background-color: ",
					";\n",
				]);
				return (
					(pc = function () {
						return e;
					}),
					e
				);
			}
			function fc() {
				var e = Object(u.a)([
					"\n  position: relative;\n  display: flex;\n  padding: 16px;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  background: none;\n  border: none;\n  outline: none;\n  border-radius: 20px;\n  color: ",
					";\n  border-style: solid;\n  border: 1px solid ",
					";\n  -webkit-appearance: none;\n\n  font-size: 18px;\n\n  ::placeholder {\n    color: ",
					";\n  }\n  transition: border 100ms;\n  :focus {\n    border: 1px solid ",
					";\n    outline: none;\n  }\n",
				]);
				return (
					(fc = function () {
						return e;
					}),
					e
				);
			}
			function jc() {
				var e = Object(u.a)([
					"\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 72px);\n  grid-gap: 16px;\n  cursor: ",
					";\n  pointer-events: ",
					";\n  :hover {\n    background-color: ",
					";\n  }\n  opacity: ",
					";\n",
				]);
				return (
					(jc = function () {
						return e;
					}),
					e
				);
			}
			function mc() {
				var e = Object(u.a)(["\n  padding: 20px;\n  padding-bottom: 12px;\n"]);
				return (
					(mc = function () {
						return e;
					}),
					e
				);
			}
			function hc() {
				var e = Object(u.a)(["\n  color: ", ";\n  font-size: 14px;\n"]);
				return (
					(hc = function () {
						return e;
					}),
					e
				);
			}
			function yc() {
				var e = Object(u.a)([
					"\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: 1rem 1rem;\n  margin: 0.25rem 0.5rem;\n  justify-content: center;\n  flex: 1;\n  user-select: none;\n",
				]);
				return (
					(yc = function () {
						return e;
					}),
					e
				);
			}
			l.default.div(yc());
			var vc = Object(l.default)(qn)(hc(), function (e) {
					return e.theme.colors.primary;
				}),
				Oc = Object(l.default)(We)(mc()),
				xc = Object(l.default)(Fn)(
					jc(),
					function (e) {
						return !e.disabled && "pointer";
					},
					function (e) {
						return e.disabled && "none";
					},
					function (e) {
						var n = e.theme;
						return !e.disabled && n.colors.invertedContrast;
					},
					function (e) {
						var n = e.disabled,
							t = e.selected;
						return n || t ? 0.5 : 1;
					}
				),
				gc = l.default.input(
					fc(),
					function (e) {
						return e.theme.colors.text;
					},
					function (e) {
						return e.theme.colors.tertiary;
					},
					function (e) {
						return e.theme.colors.textDisabled;
					},
					function (e) {
						return e.theme.colors.primary;
					}
				),
				wc = l.default.div(pc(), function (e) {
					return e.theme.colors.invertedContrast;
				}),
				Cc = l.default.div(bc(), function (e) {
					return e.theme.colors.tertiary;
				});
			function kc() {
				var e = Object(u.a)([
					"\n  display: flex;\n  justify-content: flex-end;\n",
				]);
				return (
					(kc = function () {
						return e;
					}),
					e
				);
			}
			function Tc() {
				var e = Object(u.a)([
					"\n  background-color: ",
					";\n  color: ",
					";\n  font-size: 14px;\n  border-radius: 4px;\n  padding: 0.25rem 0.3rem 0.25rem 0.3rem;\n  max-width: 6rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  justify-self: flex-end;\n  margin-right: 4px;\n",
				]);
				return (
					(Tc = function () {
						return e;
					}),
					e
				);
			}
			function Ic() {
				var e = Object(u.a)([
					"\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n",
				]);
				return (
					(Ic = function () {
						return e;
					}),
					e
				);
			}
			function Ec(e) {
				return e instanceof U.l ? e.address : e === U.d ? "ETHER" : "";
			}
			var Nc = Object(l.default)(s.v)(Ic()),
				Ac = l.default.div(
					Tc(),
					function (e) {
						return e.theme.colors.tertiary;
					},
					function (e) {
						return e.theme.colors.textSubtle;
					}
				);
			function Sc(e) {
				var n = e.balance;
				return Object(r.jsx)(Nc, {
					title: n.toExact(),
					children: n.toSignificant(4),
				});
			}
			var Rc = l.default.div(kc());
			function Uc(e) {
				var n = e.currency;
				if (!(n instanceof Hr)) return Object(r.jsx)("span", {});
				var t = n.tags;
				if (!t || 0 === t.length) return Object(r.jsx)("span", {});
				var a = t[0];
				return Object(r.jsxs)(Rc, {
					children: [
						Object(r.jsx)(Ji, {
							text: a.description,
							children: Object(r.jsx)(Ac, { children: a.name }, a.id),
						}),
						t.length > 1
							? Object(r.jsx)(Ji, {
									text: t
										.slice(1)
										.map(function (e) {
											var n = e.name,
												t = e.description;
											return "".concat(n, ": ").concat(t);
										})
										.join("; \n"),
									children: Object(r.jsx)(Ac, { children: "..." }),
							  })
							: null,
					],
				});
			}
			function Bc(e) {
				var n = e.currency,
					t = e.onSelect,
					i = e.isSelected,
					c = e.otherSelected,
					o = e.style,
					u = Se(),
					l = u.account,
					d = u.chainId,
					b = Ec(n),
					p = ot(Jr(), n),
					f = (function (e) {
						return !!Ma().find(function (n) {
							return Object(U.q)(e, n);
						});
					})(n),
					j = mi(null !== l && void 0 !== l ? l : void 0, n),
					m = (function () {
						var e = Object(De.c)();
						return Object(a.useCallback)(
							function (n, t) {
								e(ka({ chainId: n, address: t }));
							},
							[e]
						);
					})(),
					h = _a();
				return Object(r.jsxs)(xc, {
					style: o,
					className: "token-item-".concat(b),
					onClick: function () {
						return i ? null : t();
					},
					disabled: i,
					selected: c,
					children: [
						Object(r.jsx)(oc, { currency: n, size: "24px" }),
						Object(r.jsxs)(Ke, {
							children: [
								Object(r.jsx)(s.v, { title: n.name, children: n.symbol }),
								Object(r.jsxs)(vc, {
									children: [
										p || !f || n instanceof Hr
											? null
											: Object(r.jsxs)(wn, {
													fontWeight: 500,
													children: [
														"Added by user",
														Object(r.jsx)(jn, {
															onClick: function (e) {
																e.stopPropagation(),
																	d && n instanceof U.l && m(d, n.address);
															},
															children: "(Remove)",
														}),
													],
											  }),
										p || f || n instanceof Hr
											? null
											: Object(r.jsxs)(wn, {
													fontWeight: 500,
													children: [
														"Found by address",
														Object(r.jsx)(jn, {
															onClick: function (e) {
																e.stopPropagation(), n instanceof U.l && h(n);
															},
															children: "(Add)",
														}),
													],
											  }),
									],
								}),
							],
						}),
						Object(r.jsx)(Uc, { currency: n }),
						Object(r.jsx)(qn, {
							style: { justifySelf: "flex-end" },
							children: j
								? Object(r.jsx)(Sc, { balance: j })
								: l
								? Object(r.jsx)(St, {})
								: null,
						}),
					],
				});
			}
			function Pc(e) {
				var n = e.height,
					t = e.currencies,
					i = e.selectedCurrency,
					c = e.onCurrencySelect,
					o = e.otherCurrency,
					s = e.fixedListRef,
					u = e.showETH,
					l = Object(a.useMemo)(
						function () {
							return u ? [U.b.ETHER].concat(Object(oe.a)(t)) : Object(oe.a)(t);
						},
						[t, u]
					),
					d = Object(a.useCallback)(
						function (e) {
							var n = e.data,
								t = e.index,
								a = e.style,
								s = n[t],
								u = Boolean(i && Object(U.q)(i, s)),
								l = Boolean(o && Object(U.q)(o, s));
							return Object(r.jsx)(Bc, {
								style: a,
								currency: s,
								isSelected: u,
								onSelect: function () {
									return c(s);
								},
								otherSelected: l,
							});
						},
						[c, o, i]
					),
					b = Object(a.useCallback)(function (e, n) {
						return Ec(n[e]);
					}, []);
				return Object(r.jsx)(dc.a, {
					height: n,
					ref: s,
					width: "100%",
					itemData: l,
					itemCount: l.length,
					itemSize: 56,
					itemKey: b,
					children: d,
				});
			}
			function _c() {
				var e = Object(u.a)([
					"\n  padding: 8px;\n  background-color: ",
					";\n  color: ",
					";\n  border-radius: 8px;\n  user-select: none;\n  & > * {\n    user-select: none;\n  }\n  :hover {\n    cursor: pointer;\n  }\n",
				]);
				return (
					(_c = function () {
						return e;
					}),
					e
				);
			}
			var Mc = Object(l.default)(qn)(
				_c(),
				function (e) {
					return e.theme.colors.invertedContrast;
				},
				function (e) {
					return e.theme.colors.text;
				}
			);
			function Dc(e) {
				var n = e.toggleSortOrder,
					t = e.ascending;
				return Object(r.jsx)(Mc, {
					onClick: n,
					children: Object(r.jsx)(s.v, {
						fontSize: "14px",
						children: t ? "\u2191" : "\u2193",
					}),
				});
			}
			function Lc(e) {
				var n = (function () {
						var e = Se().account,
							n = ci(),
							t = pi(
								null !== e && void 0 !== e ? e : void 0,
								Object(a.useMemo)(
									function () {
										return Object.values(null !== n && void 0 !== n ? n : {});
									},
									[n]
								)
							);
						return null !== t && void 0 !== t ? t : {};
					})(),
					t = Object(a.useMemo)(
						function () {
							return (function (e) {
								return function (n, t) {
									var r,
										a,
										i =
											((r = e[n.address]),
											(a = e[t.address]),
											r && a
												? r.greaterThan(a)
													? -1
													: r.equalTo(a)
													? 0
													: 1
												: r && r.greaterThan("0")
												? -1
												: a && a.greaterThan("0")
												? 1
												: 0);
									return 0 !== i
										? i
										: n.symbol && t.symbol
										? n.symbol.toLowerCase() < t.symbol.toLowerCase()
											? -1
											: 1
										: n.symbol || t.symbol
										? -1
										: 0;
								};
							})(null !== n && void 0 !== n ? n : {});
						},
						[n]
					);
				return Object(a.useMemo)(
					function () {
						return e
							? function (e, n) {
									return -1 * t(e, n);
							  }
							: t;
					},
					[e, t]
				);
			}
			var Fc = t(274);
			function zc(e) {
				var n = e.selectedCurrency,
					t = e.onCurrencySelect,
					i = e.otherSelectedCurrency,
					c = e.showCommonBases,
					o = e.onDismiss,
					u = e.isOpen,
					d = (e.onChangeList, Object(Tt.b)().t),
					b = Se().chainId,
					p = (Object(a.useContext)(l.ThemeContext), Object(a.useRef)()),
					f = Object(a.useState)(""),
					j = Object(h.a)(f, 2),
					m = j[0],
					y = j[1],
					v = Object(a.useState)(!1),
					O = Object(h.a)(v, 2),
					x = O[0],
					g = O[1],
					w = ci(),
					C = $n(m),
					k = ui(m),
					T = Object(a.useMemo)(
						function () {
							var e = m.toLowerCase().trim();
							return "" === e || "e" === e || "et" === e || "eth" === e;
						},
						[m]
					),
					I = Lc(x),
					E = Object(De.d)(function (e) {
						return e.user.audioPlay;
					}),
					N = Object(a.useMemo)(
						function () {
							return C
								? k
									? [k]
									: []
								: (function (e, n) {
										if (0 === n.length) return e;
										var t = $n(n);
										if (t)
											return e.filter(function (e) {
												return e.address === t;
											});
										var r = n
											.toLowerCase()
											.split(/\s+/)
											.filter(function (e) {
												return e.length > 0;
											});
										if (0 === r.length) return e;
										var a = function (e) {
											var n = e
												.toLowerCase()
												.split(/\s+/)
												.filter(function (e) {
													return e.length > 0;
												});
											return r.every(function (e) {
												return (
													0 === e.length ||
													n.some(function (n) {
														return n.startsWith(e) || n.endsWith(e);
													})
												);
											});
										};
										return e.filter(function (e) {
											var n = e.symbol,
												t = e.name;
											return (n && a(n)) || (t && a(t));
										});
								  })(Object.values(w), m);
						},
						[C, k, w, m]
					),
					A = Object(a.useMemo)(
						function () {
							if (k) return [k];
							var e = N.sort(I),
								n = m
									.toLowerCase()
									.split(/\s+/)
									.filter(function (e) {
										return e.length > 0;
									});
							return n.length > 1
								? e
								: [].concat(
										Object(oe.a)(k ? [k] : []),
										Object(oe.a)(
											e.filter(function (e) {
												var t;
												return (
													(null === (t = e.symbol) || void 0 === t
														? void 0
														: t.toLowerCase()) === n[0]
												);
											})
										),
										Object(oe.a)(
											e.filter(function (e) {
												var t;
												return (
													(null === (t = e.symbol) || void 0 === t
														? void 0
														: t.toLowerCase()) !== n[0]
												);
											})
										)
								  );
						},
						[N, m, k, I]
					),
					S = Object(a.useCallback)(
						function (e) {
							if ((t(e), o(), E)) {
								var n = document.getElementById("bgMusic");
								n && n.play();
							}
						},
						[o, t, E]
					);
				Object(a.useEffect)(
					function () {
						u && y("");
					},
					[u]
				);
				var R = Object(a.useRef)(),
					B = Object(a.useCallback)(function (e) {
						var n,
							t = e.target.value,
							r = $n(t);
						y(r || t),
							null === (n = p.current) || void 0 === n || n.scrollTo(0);
					}, []),
					P = Object(a.useCallback)(
						function (e) {
							if ("Enter" === e.key)
								if ("eth" === m.toLowerCase().trim()) S(U.d);
								else if (A.length > 0) {
									var n;
									((null === (n = A[0].symbol) || void 0 === n
										? void 0
										: n.toLowerCase()) !== m.trim().toLowerCase() &&
										1 !== A.length) ||
										S(A[0]);
								}
						},
						[A, S, m]
					);
				!(function () {
					var e,
						n,
						t = Qr(),
						r = Object(De.d)(function (e) {
							return e.lists.byUrl;
						}),
						a = t ? r[t] : void 0;
					(e = null === a || void 0 === a ? void 0 : a.current),
						(n = null === a || void 0 === a ? void 0 : a.pendingUpdate),
						null === a || void 0 === a || a.loadingRequestId;
				})();
				return Object(r.jsxs)(Ke, {
					style: { width: "100%", flex: "1 1" },
					children: [
						Object(r.jsxs)(Oc, {
							gap: "14px",
							children: [
								Object(r.jsxs)(Fn, {
									children: [
										Object(r.jsxs)(s.v, {
											children: [
												Object(r.jsx)(Br, {
													translationId: 82,
													children: "Select a token",
												}),
												Object(r.jsx)($i, {
													text: Rr(
														130,
														"Find a token by searching for its name or symbol or by pasting its address below."
													),
												}),
											],
										}),
										Object(r.jsx)(s.j, { onClick: o }),
									],
								}),
								Object(r.jsx)(gc, {
									type: "text",
									id: "token-search-input",
									placeholder: d("tokenSearchPlaceholder"),
									value: m,
									ref: R,
									onChange: B,
									onKeyDown: P,
								}),
								c &&
									Object(r.jsx)(lc, {
										chainId: b,
										onSelect: S,
										selectedCurrency: n,
									}),
								Object(r.jsxs)(Fn, {
									children: [
										Object(r.jsx)(s.v, {
											fontSize: "14px",
											children: Object(r.jsx)(Br, {
												translationId: 126,
												children: "Token name",
											}),
										}),
										Object(r.jsx)(Dc, {
											ascending: x,
											toggleSortOrder: function () {
												return g(function (e) {
													return !e;
												});
											},
										}),
									],
								}),
							],
						}),
						Object(r.jsx)(wc, {}),
						Object(r.jsx)("div", {
							style: { flex: "1" },
							children: Object(r.jsx)(Fc.a, {
								disableWidth: !0,
								children: function (e) {
									var t = e.height;
									return Object(r.jsx)(Pc, {
										height: t,
										showETH: T,
										currencies: A,
										onCurrencySelect: S,
										otherCurrency: i,
										selectedCurrency: n,
										fixedListRef: p,
									});
								},
							}),
						}),
						null,
					],
				});
			}
			function Yc() {
				return (Yc =
					Object.assign ||
					function (e) {
						for (var n = 1; n < arguments.length; n++) {
							var t = arguments[n];
							for (var r in t)
								Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
						}
						return e;
					}).apply(this, arguments);
			}
			function qc(e, n) {
				if (null == e) return {};
				var t,
					r,
					a = (function (e, n) {
						if (null == e) return {};
						var t,
							r,
							a = {},
							i = Object.keys(e);
						for (r = 0; r < i.length; r++)
							(t = i[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
						return a;
					})(e, n);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					for (r = 0; r < i.length; r++)
						(t = i[r]),
							n.indexOf(t) >= 0 ||
								(Object.prototype.propertyIsEnumerable.call(e, t) &&
									(a[t] = e[t]));
				}
				return a;
			}
			var Vc = a.createElement("path", {
				d: "M0.97168 1L6.20532 6L11.439 1",
				stroke: "#AEAEAE",
			});
			function Hc(e, n) {
				var t = e.title,
					r = e.titleId,
					i = qc(e, ["title", "titleId"]);
				return a.createElement(
					"svg",
					Yc(
						{
							width: 12,
							height: 7,
							viewBox: "0 0 12 7",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
							ref: n,
							"aria-labelledby": r,
						},
						i
					),
					t ? a.createElement("title", { id: r }, t) : null,
					Vc
				);
			}
			var Wc = a.forwardRef(Hc),
				Kc = (t.p, t(275)),
				Gc = t(276),
				Qc = t.n(Gc),
				Jc = "pancakeswap",
				Xc = [Jc],
				Zc = t(150),
				$c = new Qc.a({ allErrors: !0 }).compile(Kc);
			function eo(e, n) {
				return no.apply(this, arguments);
			}
			function no() {
				return (no = Object(m.a)(
					j.a.mark(function e(n, t) {
						var r, a, i, c, o, s, u, l, d, b, p, f, m;
						return j.a.wrap(
							function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											if (n !== Jc) {
												e.next = 2;
												break;
											}
											return e.abrupt("return", Zc);
										case 2:
											if (!(r = Ti(n))) {
												e.next = 25;
												break;
											}
											return (e.prev = 4), (e.next = 7), t(r.ensName);
										case 7:
											(c = e.sent), (e.next = 14);
											break;
										case 10:
											throw (
												((e.prev = 10),
												(e.t0 = e.catch(4)),
												console.debug(
													"Failed to resolve ENS name: ".concat(r.ensName),
													e.t0
												),
												new Error(
													"Failed to resolve ENS name: ".concat(r.ensName)
												))
											);
										case 14:
											(e.prev = 14), (o = Ci(c)), (e.next = 22);
											break;
										case 18:
											throw (
												((e.prev = 18),
												(e.t1 = e.catch(14)),
												console.debug(
													"Failed to translate contenthash to URI",
													c
												),
												new Error(
													"Failed to translate contenthash to URI: ".concat(c)
												))
											);
										case 22:
											(a = Ii(
												""
													.concat(o)
													.concat(
														null !== (i = r.ensPath) && void 0 !== i ? i : ""
													)
											)),
												(e.next = 26);
											break;
										case 25:
											a = Ii(n);
										case 26:
											s = 0;
										case 27:
											if (!(s < a.length)) {
												e.next = 57;
												break;
											}
											return (
												(u = a[s]),
												(l = s === a.length - 1),
												(d = void 0),
												(e.prev = 31),
												(e.next = 34),
												fetch(u)
											);
										case 34:
											(d = e.sent), (e.next = 43);
											break;
										case 37:
											if (
												((e.prev = 37),
												(e.t2 = e.catch(31)),
												console.debug("Failed to fetch list", n, e.t2),
												!l)
											) {
												e.next = 42;
												break;
											}
											throw new Error("Failed to download list ".concat(n));
										case 42:
											return e.abrupt("continue", 54);
										case 43:
											if (d.ok) {
												e.next = 47;
												break;
											}
											if (!l) {
												e.next = 46;
												break;
											}
											throw new Error("Failed to download list ".concat(n));
										case 46:
											return e.abrupt("continue", 54);
										case 47:
											return (e.next = 49), d.json();
										case 49:
											if (((b = e.sent), $c(b))) {
												e.next = 53;
												break;
											}
											throw (
												((m =
													null !==
														(p =
															null === (f = $c.errors) || void 0 === f
																? void 0
																: f.reduce(function (e, n) {
																		var t,
																			r = ""
																				.concat(n.dataPath, " ")
																				.concat(
																					null !== (t = n.message) &&
																						void 0 !== t
																						? t
																						: ""
																				);
																		return e.length > 0
																			? "".concat(e, "; ").concat(r)
																			: "".concat(r);
																  }, "")) && void 0 !== p
														? p
														: "unknown error"),
												new Error("Token list failed validation: ".concat(m)))
											);
										case 53:
											return e.abrupt("return", b);
										case 54:
											s++, (e.next = 27);
											break;
										case 57:
											throw new Error("Unrecognized list URL protocol.");
										case 58:
										case "end":
											return e.stop();
									}
							},
							e,
							null,
							[
								[4, 10],
								[14, 18],
								[31, 37],
							]
						);
					})
				)).apply(this, arguments);
			}
			var to = [
					{
						constant: !0,
						inputs: [{ name: "node", type: "bytes32" }],
						name: "resolver",
						outputs: [{ name: "resolverAddress", type: "address" }],
						payable: !1,
						stateMutability: "view",
						type: "function",
					},
				],
				ro = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
				ao = [
					{
						constant: !0,
						inputs: [
							{ internalType: "bytes32", name: "node", type: "bytes32" },
						],
						name: "contenthash",
						outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
						payable: !1,
						stateMutability: "view",
						type: "function",
					},
				];
			function io(e, n) {
				return new Gn.a(e, ao, n);
			}
			function co(e, n) {
				return oo.apply(this, arguments);
			}
			function oo() {
				return (oo = Object(m.a)(
					j.a.mark(function e(n, t) {
						var r, a, i;
						return j.a.wrap(function (e) {
							for (;;)
								switch ((e.prev = e.next)) {
									case 0:
										return (
											(r = new Gn.a(ro, to, t)),
											(a = Object(Ei.namehash)(n)),
											(e.next = 4),
											r.resolver(a)
										);
									case 4:
										return (
											(i = e.sent), e.abrupt("return", io(i, t).contenthash(a))
										);
									case 6:
									case "end":
										return e.stop();
								}
						}, e);
					})
				)).apply(this, arguments);
			}
			function so() {
				var e = Se(),
					n = e.chainId,
					t = e.library,
					r = Object(De.c)(),
					i = Object(a.useCallback)(
						function (e) {
							if (!t || n !== U.a.MAINNET) {
								if (ee === U.a.MAINNET) {
									var r = (function () {
										var e;
										return (ne =
											null !== (e = ne) && void 0 !== e
												? e
												: new C.a(te.provider));
									})();
									if (r) return co(e, r);
								}
								throw new Error("Could not construct mainnet ENS resolver");
							}
							return co(e, t);
						},
						[n, t]
					);
				return Object(a.useCallback)(
					(function () {
						var e = Object(m.a)(
							j.a.mark(function e(n) {
								var t;
								return j.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (
													(t = Object(Re.e)()),
													r(Xe.pending({ requestId: t, url: n })),
													e.abrupt(
														"return",
														eo(n, i)
															.then(function (e) {
																return (
																	r(
																		Xe.fulfilled({
																			url: n,
																			tokenList: e,
																			requestId: t,
																		})
																	),
																	e
																);
															})
															.catch(function (e) {
																throw (
																	(console.debug(
																		"Failed to get list at url ".concat(n),
																		e
																	),
																	r(
																		Xe.rejected({
																			url: n,
																			requestId: t,
																			errorMessage: e.message,
																		})
																	),
																	e)
																);
															})
													)
												);
											case 3:
											case "end":
												return e.stop();
										}
								}, e);
							})
						);
						return function (n) {
							return e.apply(this, arguments);
						};
					})(),
					[r, i]
				);
			}
			function uo() {
				var e = Object(u.a)(["\n  flex: 1;\n  overflow: auto;\n"]);
				return (
					(uo = function () {
						return e;
					}),
					e
				);
			}
			function lo() {
				var e = Object(u.a)([
					"\n  max-width: 160px;\n  opacity: 0.6;\n  margin-right: 0.5rem;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n",
				]);
				return (
					(lo = function () {
						return e;
					}),
					e
				);
			}
			function bo() {
				var e = Object(u.a)([
					"\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n",
				]);
				return (
					(bo = function () {
						return e;
					}),
					e
				);
			}
			function po() {
				var e = Object(u.a)([
					"\n  z-index: 100;\n  visibility: ",
					";\n  opacity: ",
					";\n  transition: visibility 150ms linear, opacity 150ms linear;\n  background: ",
					";\n  border: 1px solid ",
					";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  color: ",
					";\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-gap: 8px;\n  font-size: 1rem;\n  text-align: left;\n",
				]);
				return (
					(po = function () {
						return e;
					}),
					e
				);
			}
			function fo() {
				var e = Object(u.a)([
					"\n  padding: 0;\n  font-size: 1rem;\n  opacity: ",
					";\n",
				]);
				return (
					(fo = function () {
						return e;
					}),
					e
				);
			}
			var jo = Object(l.default)(jn)(fo(), function (e) {
					return e.disabled ? "0.4" : "1";
				}),
				mo = l.default.div(
					po(),
					function (e) {
						return e.show ? "visible" : "hidden";
					},
					function (e) {
						return e.show ? 1 : 0;
					},
					function (e) {
						return e.theme.colors.invertedContrast;
					},
					function (e) {
						return e.theme.colors.tertiary;
					},
					function (e) {
						return e.theme.colors.textSubtle;
					}
				),
				ho = l.default.div(bo()),
				yo = l.default.div(lo());
			function vo(e) {
				var n = e.listUrl,
					t = Object(a.useMemo)(
						function () {
							var e;
							return null === (e = Ti(n)) || void 0 === e ? void 0 : e.ensName;
						},
						[n]
					),
					i = Object(a.useMemo)(
						function () {
							if (!t) {
								var e = n.toLowerCase();
								if (e.startsWith("ipfs://") || e.startsWith("ipns://"))
									return n;
								try {
									return new URL(n).host;
								} catch (r) {
									return;
								}
							}
						},
						[n, t]
					);
				return Object(r.jsx)(r.Fragment, {
					children: null !== t && void 0 !== t ? t : i,
				});
			}
			function Oo(e) {
				return "list-row-".concat(e.replace(/\./g, "-"));
			}
			var xo = Object(a.memo)(function (e) {
					var n = e.listUrl,
						t = e.onBack,
						i = Object(De.d)(function (e) {
							return e.lists.byUrl;
						}),
						c = Qr(),
						o = Object(De.c)(),
						u = i[n],
						l = u.current,
						d = u.pendingUpdate,
						b = n === c,
						p = (function () {
							var e =
									arguments.length > 0 &&
									void 0 !== arguments[0] &&
									arguments[0],
								n = Object(a.useState)(e),
								t = Object(h.a)(n, 2),
								r = t[0],
								i = t[1],
								c = Object(a.useCallback)(function () {
									return i(function (e) {
										return !e;
									});
								}, []);
							return [r, c];
						})(!1),
						f = Object(h.a)(p, 2),
						j = f[0],
						m = f[1],
						y = Object(a.useRef)(),
						v = Object(a.useState)(),
						O = Object(h.a)(v, 2),
						x = O[0],
						g = O[1],
						w = Object(a.useState)(),
						C = Object(h.a)(w, 2),
						k = C[0],
						T = C[1],
						I = Object(Mi.a)(x, k, {
							placement: "auto",
							strategy: "fixed",
							modifiers: [{ name: "offset", options: { offset: [8, 8] } }],
						}),
						E = I.styles,
						N = I.attributes;
					!(function (e, n) {
						var t = Object(a.useRef)(n);
						Object(a.useEffect)(
							function () {
								t.current = n;
							},
							[n]
						),
							Object(a.useEffect)(
								function () {
									var n = function (n) {
										var r, a;
										(null !==
											(r =
												null === (a = e.current) || void 0 === a
													? void 0
													: a.contains(n.target)) &&
											void 0 !== r &&
											r) ||
											(t.current && t.current());
									};
									return (
										document.addEventListener("mousedown", n),
										function () {
											document.removeEventListener("mousedown", n);
										}
									);
								},
								[e]
							);
					})(y, j ? m : void 0);
					var A = Object(a.useCallback)(
							function () {
								b || (o(nn(n)), t());
							},
							[o, b, n, t]
						),
						S = Object(a.useCallback)(
							function () {
								d && o(Ze(n));
							},
							[o, n, d]
						),
						R = Object(a.useCallback)(
							function () {
								"REMOVE" ===
									window.prompt(
										"Please confirm you would like to remove this list by typing REMOVE"
									) && o(en(n));
							},
							[o, n]
						);
					return l
						? Object(r.jsxs)(
								Vn,
								{
									align: "center",
									padding: "16px",
									id: Oo(n),
									children: [
										l.logoURI
											? Object(r.jsx)(_i, {
													style: { marginRight: "1rem" },
													logoURI: l.logoURI,
													alt: "".concat(l.name, " list logo"),
											  })
											: Object(r.jsx)("div", {
													style: {
														width: "24px",
														height: "24px",
														marginRight: "1rem",
													},
											  }),
										Object(r.jsxs)(Ke, {
											style: { flex: "1" },
											children: [
												Object(r.jsx)(Vn, {
													children: Object(r.jsx)(s.v, {
														bold: b,
														fontSize: "16px",
														style: {
															overflow: "hidden",
															textOverflow: "ellipsis",
														},
														children: l.name,
													}),
												}),
												Object(r.jsx)(Vn, {
													style: { marginTop: "4px" },
													children: Object(r.jsx)(yo, {
														title: n,
														children: Object(r.jsx)(vo, { listUrl: n }),
													}),
												}),
											],
										}),
										Object(r.jsxs)(ho, {
											ref: y,
											children: [
												Object(r.jsx)("div", {
													style: { display: "inline-block" },
													ref: g,
													children: Object(r.jsx)(s.c, {
														style: { width: "32px", marginRight: "8px" },
														onClick: m,
														variant: "secondary",
														children: Object(r.jsx)(Wc, {}),
													}),
												}),
												j &&
													Object(r.jsxs)(
														mo,
														Object(V.a)(
															Object(V.a)(
																{ show: !0, ref: T, style: E.popper },
																N.popper
															),
															{},
															{
																children: [
																	Object(r.jsx)("div", {
																		children: l && Rn(l.version),
																	}),
																	Object(r.jsx)(Cc, {}),
																	Object(r.jsx)(yn, {
																		href: "https://tokenlists.org/token-list?url=".concat(
																			n
																		),
																		children: "View list",
																	}),
																	Object(r.jsx)(jo, {
																		onClick: R,
																		disabled: 1 === Object.keys(i).length,
																		children: "Remove list",
																	}),
																	d &&
																		Object(r.jsx)(jo, {
																			onClick: S,
																			children: "Update list",
																		}),
																],
															}
														)
													),
											],
										}),
										b
											? Object(r.jsx)(s.c, {
													disabled: !0,
													style: { width: "5rem", minWidth: "5rem" },
													children: "Selected",
											  })
											: Object(r.jsx)(r.Fragment, {
													children: Object(r.jsx)(s.c, {
														className: "select-button",
														style: { width: "5rem", minWidth: "4.5rem" },
														onClick: A,
														children: "Select",
													}),
											  }),
									],
								},
								n
						  )
						: null;
				}),
				go = l.default.div(uo());
			function wo(e) {
				var n,
					t = e.onDismiss,
					i = e.onBack,
					c = Object(a.useState)(""),
					o = Object(h.a)(c, 2),
					u = o[0],
					l = o[1],
					d = Object(De.c)(),
					b = Object(De.d)(function (e) {
						return e.lists.byUrl;
					}),
					p = Boolean(
						null === (n = b[u]) || void 0 === n ? void 0 : n.loadingRequestId
					),
					f = Object(a.useState)(null),
					j = Object(h.a)(f, 2),
					m = j[0],
					y = j[1],
					v = Object(a.useCallback)(function (e) {
						l(e.target.value), y(null);
					}, []),
					O = so(),
					x = Object(a.useCallback)(
						function () {
							p ||
								(y(null),
								O(u)
									.then(function () {
										l("");
									})
									.catch(function (e) {
										y(e.message), d(en(u));
									}));
						},
						[p, d, O, u]
					),
					g = Object(a.useMemo)(
						function () {
							return Ii(u).length > 0 || Boolean(Ti(u));
						},
						[u]
					),
					w = Object(a.useCallback)(
						function (e) {
							g && "Enter" === e.key && x();
						},
						[x, g]
					),
					C = Object(a.useMemo)(
						function () {
							return Object.keys(b)
								.filter(function (e) {
									return Boolean(b[e].current);
								})
								.sort(function (e, n) {
									var t = b[e].current,
										r = b[n].current;
									return t && r
										? t.name.toLowerCase() < r.name.toLowerCase()
											? -1
											: t.name.toLowerCase() === r.name.toLowerCase()
											? 0
											: 1
										: t
										? -1
										: r
										? 1
										: 0;
								});
						},
						[b]
					);
				return Object(r.jsxs)(Ke, {
					style: { width: "100%", flex: "1 1" },
					children: [
						Object(r.jsx)(Oc, {
							children: Object(r.jsxs)(Fn, {
								children: [
									Object(r.jsx)("div", {
										children: Object(r.jsx)(an.a, {
											style: { cursor: "pointer" },
											onClick: i,
										}),
									}),
									Object(r.jsx)(s.v, {
										fontSize: "20px",
										children: "Manage Lists",
									}),
									Object(r.jsx)(fn, { onClick: t }),
								],
							}),
						}),
						Object(r.jsx)(wc, {}),
						Object(r.jsxs)(Oc, {
							gap: "14px",
							children: [
								Object(r.jsxs)(s.v, {
									bold: !0,
									children: [
										"Add a list",
										" ",
										Object(r.jsx)($i, {
											text:
												"Token lists are an open specification for lists of BEP20 tokens. You can use any token list by entering its URL below. Beware that third party token lists can contain fake or malicious BEP20 tokens.",
										}),
									],
								}),
								Object(r.jsxs)(Vn, {
									children: [
										Object(r.jsx)(gc, {
											type: "text",
											id: "list-add-input",
											placeholder: "https:// or ipfs:// or ENS name",
											value: u,
											onChange: v,
											onKeyDown: w,
											style: {
												height: "2.75rem",
												borderRadius: 12,
												padding: "12px",
											},
										}),
										Object(r.jsx)(s.c, {
											onClick: x,
											style: { maxWidth: "4em", marginLeft: "1em" },
											disabled: !g,
											children: "Add",
										}),
									],
								}),
								m
									? Object(r.jsx)(Sn, {
											title: m,
											style: { textOverflow: "ellipsis", overflow: "hidden" },
											error: !0,
											children: m,
									  })
									: null,
							],
						}),
						Object(r.jsx)(wc, {}),
						Object(r.jsx)(go, {
							children: C.map(function (e) {
								return Object(r.jsx)(xo, { listUrl: e, onBack: i }, e);
							}),
						}),
						Object(r.jsx)(wc, {}),
						Object(r.jsx)("div", {
							style: { padding: "16px", textAlign: "center" },
							children: Object(r.jsx)(yn, {
								href: "https://tokenlists.org",
								children: "Browse lists",
							}),
						}),
					],
				});
			}
			function Co(e) {
				var n = e.isOpen,
					t = e.onDismiss,
					i = e.onCurrencySelect,
					c = e.selectedCurrency,
					o = e.otherSelectedCurrency,
					s = Object(a.useState)(!1),
					u = Object(h.a)(s, 2),
					l = u[0],
					d = u[1],
					b = hi(n);
				Object(a.useEffect)(
					function () {
						n && !b && d(!1);
					},
					[n, b]
				);
				var p = Object(a.useCallback)(
						function (e) {
							i(e), t();
						},
						[t, i]
					),
					f = Object(a.useCallback)(function () {
						d(!0);
					}, []),
					j = Object(a.useCallback)(function () {
						d(!1);
					}, []),
					m = !Qr();
				return Object(r.jsx)(ir, {
					isOpen: n,
					onDismiss: t,
					maxHeight: 90,
					minHeight: l ? 40 : m ? 0 : 80,
					children: l
						? Object(r.jsx)(wo, { onDismiss: t, onBack: j })
						: Object(r.jsx)(zc, {
								isOpen: n,
								onDismiss: t,
								onCurrencySelect: p,
								onChangeList: f,
								selectedCurrency: c,
								otherSelectedCurrency: o,
								showCommonBases: !1,
						  }),
				});
			}
			function ko() {
				var e = Object(u.a)(["\n  position: absolute;\n  left: ", ";\n"]);
				return (
					(ko = function () {
						return e;
					}),
					e
				);
			}
			function To() {
				var e = Object(u.a)(["\n  z-index: 2;\n"]);
				return (
					(To = function () {
						return e;
					}),
					e
				);
			}
			function Io() {
				var e = Object(u.a)([
					"\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  margin-right: ",
					";\n",
				]);
				return (
					(Io = function () {
						return e;
					}),
					e
				);
			}
			var Eo = l.default.div(Io(), function (e) {
					var n = e.sizeraw;
					return e.margin && (n / 3 + 8).toString() + "px";
				}),
				No = Object(l.default)(oc)(To()),
				Ao = Object(l.default)(oc)(ko(), function (e) {
					return (e.sizeraw / 2).toString() + "px";
				});
			function So(e) {
				var n = e.currency0,
					t = e.currency1,
					a = e.size,
					i = void 0 === a ? 16 : a,
					c = e.margin,
					o = void 0 !== c && c;
				return Object(r.jsxs)(Eo, {
					sizeraw: i,
					margin: o,
					children: [
						n && Object(r.jsx)(No, { currency: n, size: i.toString() + "px" }),
						t &&
							Object(r.jsx)(Ao, {
								currency: t,
								size: i.toString() + "px",
								sizeraw: i,
							}),
					],
				});
			}
			function Ro() {
				var e = Object(u.a)([
					"\n  color: ",
					";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: transparent;\n  font-size: 16px;\n  text-align: ",
					";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",
					";\n  }\n",
				]);
				return (
					(Ro = function () {
						return e;
					}),
					e
				);
			}
			var Uo = l.default.input(
					Ro(),
					function (e) {
						var n = e.error,
							t = e.theme;
						return n ? t.colors.failure : t.colors.text;
					},
					function (e) {
						var n = e.align;
						return n && n;
					},
					function (e) {
						return e.theme.colors.textSubtle;
					}
				),
				Bo = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
				Po = i.a.memo(function (e) {
					var n = e.value,
						t = e.onUserInput,
						a = e.placeholder,
						i = Object(tn.a)(e, ["value", "onUserInput", "placeholder"]);
					return Object(r.jsx)(
						Uo,
						Object(V.a)(
							Object(V.a)({}, i),
							{},
							{
								value: n,
								onChange: function (e) {
									var n;
									("" === (n = e.target.value.replace(/,/g, ".")) ||
										Bo.test(n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) &&
										t(n);
								},
								inputMode: "decimal",
								title: "Token Amount",
								autoComplete: "off",
								autoCorrect: "off",
								type: "text",
								pattern: "^[0-9]*[.,]?[0-9]*$",
								placeholder: a || "0.0",
								minLength: 1,
								maxLength: 79,
								spellCheck: "false",
							}
						)
					);
				});
			function _o() {
				var e = Object(u.a)([
					"\n  border-radius: 16px;\n  background-color: ",
					";\n  box-shadow: ",
					";\n",
				]);
				return (
					(_o = function () {
						return e;
					}),
					e
				);
			}
			function Mo() {
				var e = Object(u.a)([
					"\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: ",
					";\n  background-color: ",
					";\n  z-index: 1;\n",
				]);
				return (
					(Mo = function () {
						return e;
					}),
					e
				);
			}
			function Do() {
				var e = Object(u.a)([
					"\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n",
				]);
				return (
					(Do = function () {
						return e;
					}),
					e
				);
			}
			function Lo() {
				var e = Object(u.a)([
					"\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: ",
					";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ",
					";\n  }\n",
				]);
				return (
					(Lo = function () {
						return e;
					}),
					e
				);
			}
			function Fo() {
				var e = Object(u.a)([
					"\n  align-items: center;\n  height: 34px;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: transparent;\n  color: ",
					";\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  padding: 0 0.5rem;\n\n  :focus,\n  :hover {\n    background-color: ",
					";\n  }\n",
				]);
				return (
					(Fo = function () {
						return e;
					}),
					e
				);
			}
			function zo() {
				var e = Object(u.a)([
					"\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: ",
					";\n",
				]);
				return (
					(zo = function () {
						return e;
					}),
					e
				);
			}
			var Yo = l.default.div(zo(), function (e) {
					return e.selected
						? "0.75rem 0.5rem 0.75rem 1rem"
						: "0.75rem 0.75rem 0.75rem 1rem";
				}),
				qo = l.default.button(
					Fo(),
					function (e) {
						var n = e.selected,
							t = e.theme;
						return n ? t.colors.text : "#FFFFFF";
					},
					function (e) {
						var n = e.theme;
						return Object(rn.a)(0.05, n.colors.input);
					}
				),
				Vo = l.default.div(
					Lo(),
					function (e) {
						return e.theme.colors.text;
					},
					function (e) {
						var n = e.theme;
						return Object(rn.a)(0.2, n.colors.textSubtle);
					}
				),
				Ho = l.default.span(Do()),
				Wo = l.default.div(
					Mo(),
					function (e) {
						return e.hideInput ? "8px" : "20px";
					},
					function (e) {
						return e.theme.colors.background;
					}
				),
				Ko = l.default.div(
					_o(),
					function (e) {
						return e.theme.colors.input;
					},
					function (e) {
						return e.theme.shadows.inset;
					}
				);
			function Go(e) {
				var n = e.value,
					t = e.onUserInput,
					i = e.onMax,
					c = e.showMaxButton,
					o = e.label,
					u = void 0 === o ? Rr(132, "Input") : o,
					l = e.onCurrencySelect,
					d = e.currency,
					b = e.disableCurrencySelect,
					p = void 0 !== b && b,
					f = e.hideBalance,
					j = void 0 !== f && f,
					m = e.pair,
					y = void 0 === m ? null : m,
					v = e.hideInput,
					O = void 0 !== v && v,
					x = e.otherCurrency,
					g = e.id,
					w = e.showCommonBases,
					C = Object(a.useState)(!1),
					k = Object(h.a)(C, 2),
					T = k[0],
					I = k[1],
					E = Se().account,
					N = mi(
						null !== E && void 0 !== E ? E : void 0,
						null !== d && void 0 !== d ? d : void 0
					),
					A = Object(a.useCallback)(
						function () {
							I(!1);
						},
						[I]
					);
				return Object(r.jsxs)(Wo, {
					id: g,
					children: [
						Object(r.jsxs)(Ko, {
							hideInput: O,
							children: [
								!O &&
									Object(r.jsx)(Vo, {
										children: Object(r.jsxs)(Fn, {
											children: [
												Object(r.jsx)(s.v, { fontSize: "14px", children: u }),
												E &&
													Object(r.jsx)(s.v, {
														onClick: i,
														fontSize: "14px",
														style: { display: "inline", cursor: "pointer" },
														children:
															!j && d && N
																? "Balance: " +
																  (null === N || void 0 === N
																		? void 0
																		: N.toSignificant(6))
																: " -",
													}),
											],
										}),
									}),
								Object(r.jsxs)(Yo, {
									style: O ? { padding: "0", borderRadius: "8px" } : {},
									selected: p,
									children: [
										!O &&
											Object(r.jsxs)(r.Fragment, {
												children: [
													Object(r.jsx)(Po, {
														className: "token-amount-input",
														value: n,
														onUserInput: function (e) {
															t(e);
														},
													}),
													E &&
														d &&
														c &&
														"To" !== u &&
														Object(r.jsx)(s.c, {
															onClick: i,
															size: "sm",
															variant: "text",
															children: "MAX",
														}),
												],
											}),
										Object(r.jsx)(qo, {
											selected: !!d,
											className: "open-currency-select-button",
											onClick: function () {
												p || I(!0);
											},
											children: Object(r.jsxs)(Ho, {
												children: [
													y
														? Object(r.jsx)(So, {
																currency0: y.token0,
																currency1: y.token1,
																size: 16,
																margin: !0,
														  })
														: d
														? Object(r.jsx)(oc, {
																currency: d,
																size: "24px",
																style: { marginRight: "8px" },
														  })
														: null,
													y
														? Object(r.jsxs)(s.v, {
																children: [
																	null === y || void 0 === y
																		? void 0
																		: y.token0.symbol,
																	":",
																	null === y || void 0 === y
																		? void 0
																		: y.token1.symbol,
																],
														  })
														: Object(r.jsx)(s.v, {
																children:
																	(d && d.symbol && d.symbol.length > 20
																		? d.symbol.slice(0, 4) +
																		  "..." +
																		  d.symbol.slice(
																				d.symbol.length - 5,
																				d.symbol.length
																		  )
																		: null === d || void 0 === d
																		? void 0
																		: d.symbol) ||
																	Object(r.jsx)(Br, {
																		translationId: 82,
																		children: "Select a currency",
																	}),
														  }),
													!p && Object(r.jsx)(s.i, {}),
												],
											}),
										}),
									],
								}),
							],
						}),
						!p &&
							l &&
							Object(r.jsx)(Co, {
								isOpen: T,
								onDismiss: A,
								onCurrencySelect: l,
								selectedCurrency: d,
								otherSelectedCurrency: x,
								showCommonBases: w,
							}),
					],
				});
			}
			function Qo() {
				var e = Object(u.a)(["\n  color: ", ";\n"]);
				return (
					(Qo = function () {
						return e;
					}),
					e
				);
			}
			function Jo() {
				var e = Object(u.a)(["\n  font-weight: 500;\n  font-size: 20px;\n"]);
				return (
					(Jo = function () {
						return e;
					}),
					e
				);
			}
			function Xo() {
				var e = Object(u.a)([
					"\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  height: 3rem;\n  border-radius: 3rem;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ",
					";\n  font-size: 20px;\n\n  &.",
					" {\n    border-radius: 12px;\n    font-weight: 500;\n    color: ",
					";\n  }\n\n  :hover,\n  :focus {\n    color: ",
					";\n  }\n",
				]);
				return (
					(Xo = function () {
						return e;
					}),
					e
				);
			}
			function Zo() {
				var e = Object(u.a)([
					"\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  height: 3rem;\n  border-radius: 3rem;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ",
					";\n  font-size: 20px;\n\n  &.",
					" {\n    border-radius: 12px;\n    font-weight: 500;\n    color: ",
					";\n  }\n\n  :hover,\n  :focus {\n    color: ",
					";\n  }\n",
				]);
				return (
					(Zo = function () {
						return e;
					}),
					e
				);
			}
			function $o() {
				var e = Object(u.a)([
					"\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  border-radius: 3rem;\n  justify-content: space-evenly;\n",
				]);
				return (
					($o = function () {
						return e;
					}),
					e
				);
			}
			var es = l.default.div($o()),
				ns = "ACTIVE",
				ts =
					(l.default.a(
						Zo(),
						function (e) {
							return e.theme.colors.textDisabled;
						},
						ns,
						function (e) {
							return e.theme.colors.text;
						},
						function (e) {
							var n = e.theme;
							return Object(rn.a)(0.1, n.colors.text);
						}
					),
					Object(l.default)(y.c).attrs({ activeClassName: ns })(
						Xo(),
						function (e) {
							return e.theme.colors.textDisabled;
						},
						ns,
						function (e) {
							return e.theme.colors.text;
						},
						function (e) {
							var n = e.theme;
							return Object(rn.a)(0.1, n.colors.text);
						}
					),
					l.default.div(Jo())),
				rs = Object(l.default)(an.a)(Qo(), function (e) {
					return e.theme.colors.text;
				});
			function as() {
				return Object(r.jsx)(es, {
					children: Object(r.jsxs)(Fn, {
						style: { padding: "1rem" },
						children: [
							Object(r.jsx)(y.b, {
								to: "/pool",
								children: Object(r.jsx)(rs, {}),
							}),
							Object(r.jsx)(ts, { children: "Import Pool" }),
							Object(r.jsx)($i, {
								text:
									"Use this tool to find pairs that don't automatically appear in the interface.",
							}),
						],
					}),
				});
			}
			function is(e) {
				var n = e.adding;
				return Object(r.jsx)(es, {
					children: Object(r.jsxs)(Fn, {
						style: { padding: "1rem" },
						children: [
							Object(r.jsx)(y.b, {
								to: "/pool",
								children: Object(r.jsx)(rs, {}),
							}),
							Object(r.jsxs)(ts, {
								children: [n ? "Add" : "Remove", " Liquidity"],
							}),
							Object(r.jsx)($i, {
								text: n
									? "When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time."
									: "Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive.",
							}),
						],
					}),
				});
			}
			var cs = t(499),
				os = t(500);
			function ss(e) {
				var n,
					t,
					r =
						null ===
							(n = ma(
								ti(null === e || void 0 === e ? void 0 : e.address, !1),
								"totalSupply"
							)) ||
						void 0 === n ||
						null === (t = n.result) ||
						void 0 === t
							? void 0
							: t[0];
				return e && r ? new U.m(e, r.toString()) : void 0;
			}
			function us(e) {
				if (e === U.d) return "ETH";
				if (e instanceof U.l) return e.address;
				throw new Error("invalid currency");
			}
			function ls(e, n) {
				return n && e === U.d ? U.p[n] : e instanceof U.l ? e : void 0;
			}
			function ds(e, n) {
				var t = e && n ? ls(e.currency, n) : void 0;
				return t && e ? new U.m(t, e.raw) : void 0;
			}
			function bs(e) {
				return e.equals(U.p[e.chainId]) ? U.d : e;
			}
			function ps() {
				var e = Object(u.a)([
					"\n  background-color: ",
					";\n  color: ",
					";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n",
				]);
				return (
					(ps = function () {
						return e;
					}),
					e
				);
			}
			function fs() {
				var e = Object(u.a)([
					"\n  background-color: ",
					";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n",
				]);
				return (
					(fs = function () {
						return e;
					}),
					e
				);
			}
			function js() {
				var e = Object(u.a)([
					"\n  background-color: ",
					";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ",
					";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n",
				]);
				return (
					(js = function () {
						return e;
					}),
					e
				);
			}
			function ms() {
				var e = Object(u.a)([
					"\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n",
				]);
				return (
					(ms = function () {
						return e;
					}),
					e
				);
			}
			function hs() {
				var e = Object(u.a)([
					"\n  text-overflow: ellipsis;\n  width: 220px;\n  overflow: hidden;\n",
				]);
				return (
					(hs = function () {
						return e;
					}),
					e
				);
			}
			function ys() {
				var e = Object(u.a)([
					"\n  height: 22px;\n  width: 22px;\n  background-color: ",
					";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ",
					";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ",
					";\n  }\n  :focus {\n    background-color: ",
					";\n    outline: none;\n  }\n",
				]);
				return (
					(ys = function () {
						return e;
					}),
					e
				);
			}
			function vs() {
				var e = Object(u.a)(["\n  color: ", ";\n"]);
				return (
					(vs = function () {
						return e;
					}),
					e
				);
			}
			function Os() {
				var e = Object(u.a)(["\n  margin-top: 1rem;\n"]);
				return (
					(Os = function () {
						return e;
					}),
					e
				);
			}
			function xs() {
				var e = Object(u.a)([
					"\n  height: 1px;\n  width: 100%;\n  background-color: ",
					";\n",
				]);
				return (
					(xs = function () {
						return e;
					}),
					e
				);
			}
			function gs() {
				var e = Object(u.a)([
					"\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        ",
				]);
				return (
					(gs = function () {
						return e;
					}),
					e
				);
			}
			function ws() {
				var e = Object(u.a)(["\n  padding: 2px;\n\n  ", "\n"]);
				return (
					(ws = function () {
						return e;
					}),
					e
				);
			}
			function Cs() {
				var e = Object(u.a)(["\n  position: relative;\n"]);
				return (
					(Cs = function () {
						return e;
					}),
					e
				);
			}
			var ks = l.default.div(Cs()),
				Ts = l.default.div(ws(), function (e) {
					return e.clickable ? Object(l.css)(gs()) : null;
				}),
				Is = l.default.div(xs(), function (e) {
					return e.theme.colors.tertiary;
				}),
				Es = l.default.div(Os()),
				Ns = Object(l.default)(s.v)(vs(), function (e) {
					var n = e.theme,
						t = e.severity;
					return 3 === t || 4 === t
						? n.colors.failure
						: 2 === t
						? n.colors.binance
						: 1 === t
						? n.colors.text
						: n.colors.success;
				}),
				As = l.default.button(
					ys(),
					function (e) {
						return e.theme.colors.invertedContrast;
					},
					function (e) {
						return e.theme.colors.textSubtle;
					},
					function (e) {
						return e.theme.colors.tertiary;
					},
					function (e) {
						return e.theme.colors.tertiary;
					}
				),
				Ss = (Object(l.default)(s.v)(hs()), l.default.span(ms())),
				Rs = l.default.div(
					js(),
					function (e) {
						var n = e.theme;
						return Object(rn.b)(0.9, n.colors.failure);
					},
					function (e) {
						return e.theme.colors.failure;
					}
				),
				Us = l.default.div(fs(), function (e) {
					var n = e.theme;
					return Object(rn.b)(0.9, n.colors.failure);
				});
			function Bs(e) {
				var n = e.error;
				return Object(r.jsxs)(Rs, {
					children: [
						Object(r.jsx)(Us, { children: Object(r.jsx)(kr.a, { size: 24 }) }),
						Object(r.jsx)("p", { children: n }),
					],
				});
			}
			var Ps = Object(l.default)(We)(
				ps(),
				function (e) {
					var n = e.theme;
					return Object(rn.b)(0.9, n.colors.primary);
				},
				function (e) {
					return e.theme.colors.primary;
				}
			);
			function _s() {
				var e = Object(u.a)([
					"\n  border: 1px solid ",
					";\n  :hover {\n    border: 1px solid ",
					";\n  }\n",
				]);
				return (
					(_s = function () {
						return e;
					}),
					e
				);
			}
			function Ms() {
				var e = Object(u.a)(["\n  height: 24px;\n"]);
				return (
					(Ms = function () {
						return e;
					}),
					e
				);
			}
			var Ds = Object(l.default)(Fn)(Ms()),
				Ls = Object(l.default)(Ht)(
					_s(),
					function (e) {
						return e.theme.colors.invertedContrast;
					},
					function (e) {
						var n = e.theme;
						return Object(rn.a)(0.06, n.colors.invertedContrast);
					}
				);
			function Fs(e) {
				var n = e.pair,
					t = e.showUnwrapped,
					i = void 0 !== t && t,
					c = Se().account,
					o = i ? n.token0 : bs(n.token0),
					u = i ? n.token1 : bs(n.token1),
					l = Object(a.useState)(!1),
					d = Object(h.a)(l, 2),
					b = d[0],
					p = d[1],
					f = fi(null !== c && void 0 !== c ? c : void 0, n.liquidityToken),
					j = ss(n.liquidityToken),
					m =
						n && j && f && U.f.greaterThanOrEqual(j.raw, f.raw)
							? [
									n.getLiquidityValue(n.token0, j, f, !1),
									n.getLiquidityValue(n.token1, j, f, !1),
							  ]
							: [void 0, void 0],
					y = Object(h.a)(m, 2),
					v = y[0],
					O = y[1];
				return Object(r.jsx)(r.Fragment, {
					children:
						f &&
						Object(r.jsx)(s.f, {
							children: Object(r.jsx)(s.g, {
								children: Object(r.jsxs)(We, {
									gap: "12px",
									children: [
										Object(r.jsx)(Ds, {
											children: Object(r.jsx)(qn, {
												children: Object(r.jsx)(s.v, {
													style: {
														textTransform: "uppercase",
														fontWeight: 600,
													},
													fontSize: "14px",
													color: "textSubtle",
													children: "LP Tokens in your Wallet",
												}),
											}),
										}),
										Object(r.jsxs)(Ds, {
											onClick: function () {
												return p(!b);
											},
											children: [
												Object(r.jsxs)(qn, {
													children: [
														Object(r.jsx)(So, {
															currency0: o,
															currency1: u,
															margin: !0,
															size: 20,
														}),
														Object(r.jsxs)(s.v, {
															fontSize: "14px",
															children: [o.symbol, "/", u.symbol],
														}),
													],
												}),
												Object(r.jsx)(qn, {
													children: Object(r.jsx)(s.v, {
														fontSize: "14px",
														children: f ? f.toSignificant(4) : "-",
													}),
												}),
											],
										}),
										Object(r.jsxs)(We, {
											gap: "4px",
											children: [
												Object(r.jsxs)(Ds, {
													children: [
														Object(r.jsxs)(s.v, {
															fontSize: "14px",
															children: [o.symbol, ":"],
														}),
														v
															? Object(r.jsx)(qn, {
																	children: Object(r.jsx)(s.v, {
																		ml: "6px",
																		fontSize: "14px",
																		children:
																			null === v || void 0 === v
																				? void 0
																				: v.toSignificant(6),
																	}),
															  })
															: "-",
													],
												}),
												Object(r.jsxs)(Ds, {
													children: [
														Object(r.jsxs)(s.v, {
															fontSize: "14px",
															children: [u.symbol, ":"],
														}),
														O
															? Object(r.jsx)(qn, {
																	children: Object(r.jsx)(s.v, {
																		ml: "6px",
																		fontSize: "14px",
																		children:
																			null === O || void 0 === O
																				? void 0
																				: O.toSignificant(6),
																	}),
															  })
															: "-",
													],
												}),
											],
										}),
									],
								}),
							}),
						}),
				});
			}
			function zs(e) {
				var n = e.pair,
					t = Se().account,
					i = bs(n.token0),
					c = bs(n.token1),
					o = Object(a.useState)(!1),
					u = Object(h.a)(o, 2),
					l = u[0],
					d = u[1],
					b = fi(null !== t && void 0 !== t ? t : void 0, n.liquidityToken),
					p = ss(n.liquidityToken),
					f =
						b && p && U.f.greaterThanOrEqual(p.raw, b.raw)
							? new U.h(b.raw, p.raw)
							: void 0,
					j =
						n && p && b && U.f.greaterThanOrEqual(p.raw, b.raw)
							? [
									n.getLiquidityValue(n.token0, p, b, !1),
									n.getLiquidityValue(n.token1, p, b, !1),
							  ]
							: [void 0, void 0],
					m = Object(h.a)(j, 2),
					v = m[0],
					O = m[1];
				return Object(r.jsx)(Ls, {
					children: Object(r.jsxs)(We, {
						gap: "12px",
						children: [
							Object(r.jsxs)(Ds, {
								onClick: function () {
									return d(!l);
								},
								style: { cursor: "pointer" },
								children: [
									Object(r.jsxs)(qn, {
										children: [
											Object(r.jsx)(So, {
												currency0: i,
												currency1: c,
												margin: !0,
												size: 20,
											}),
											Object(r.jsx)(s.v, {
												children:
													i && c
														? "".concat(i.symbol, "/").concat(c.symbol)
														: Object(r.jsx)(Ss, { children: "Loading" }),
											}),
										],
									}),
									Object(r.jsx)(qn, {
										children: l
											? Object(r.jsx)(cs.a, {
													size: "20",
													style: { marginLeft: "10px" },
											  })
											: Object(r.jsx)(os.a, {
													size: "20",
													style: { marginLeft: "10px" },
											  }),
									}),
								],
							}),
							l &&
								Object(r.jsxs)(We, {
									gap: "8px",
									children: [
										Object(r.jsxs)(Ds, {
											children: [
												Object(r.jsx)(qn, {
													children: Object(r.jsxs)(s.v, {
														children: ["Pooled ", i.symbol, ":"],
													}),
												}),
												v
													? Object(r.jsxs)(qn, {
															children: [
																Object(r.jsx)(s.v, {
																	ml: "6px",
																	children:
																		null === v || void 0 === v
																			? void 0
																			: v.toSignificant(6),
																}),
																Object(r.jsx)(oc, {
																	size: "20px",
																	style: { marginLeft: "8px" },
																	currency: i,
																}),
															],
													  })
													: "-",
											],
										}),
										Object(r.jsxs)(Ds, {
											children: [
												Object(r.jsx)(qn, {
													children: Object(r.jsxs)(s.v, {
														children: ["Pooled ", c.symbol, ":"],
													}),
												}),
												O
													? Object(r.jsxs)(qn, {
															children: [
																Object(r.jsx)(s.v, {
																	ml: "6px",
																	children:
																		null === O || void 0 === O
																			? void 0
																			: O.toSignificant(6),
																}),
																Object(r.jsx)(oc, {
																	size: "20px",
																	style: { marginLeft: "8px" },
																	currency: c,
																}),
															],
													  })
													: "-",
											],
										}),
										Object(r.jsxs)(Ds, {
											children: [
												Object(r.jsx)(s.v, { children: "Your pool tokens:" }),
												Object(r.jsx)(s.v, {
													children: b ? b.toSignificant(4) : "-",
												}),
											],
										}),
										Object(r.jsxs)(Ds, {
											children: [
												Object(r.jsx)(s.v, { children: "Your pool share:" }),
												Object(r.jsx)(s.v, {
													children: f ? f.toFixed(2) + "%" : "-",
												}),
											],
										}),
										Object(r.jsxs)(Fn, {
											marginTop: "10px",
											children: [
												Object(r.jsx)(s.c, {
													as: y.b,
													to: "/add/".concat(us(i), "/").concat(us(c)),
													style: { width: "48%" },
													children: "Add",
												}),
												Object(r.jsx)(s.c, {
													as: y.b,
													style: { width: "48%" },
													to: "/remove/".concat(us(i), "/").concat(us(c)),
													children: "Remove",
												}),
											],
										}),
									],
								}),
						],
					}),
				});
			}
			var Ys,
				qs = new Lr.b(Ya.abi);
			function Vs(e) {
				var n = Se().chainId,
					t = Object(a.useMemo)(
						function () {
							return e.map(function (e) {
								var t = Object(h.a)(e, 2),
									r = t[0],
									a = t[1];
								return [ls(r, n), ls(a, n)];
							});
						},
						[n, e]
					),
					r = ja(
						Object(a.useMemo)(
							function () {
								return t.map(function (e) {
									var n = Object(h.a)(e, 2),
										t = n[0],
										r = n[1];
									return t && r && !t.equals(r) ? U.g.getAddress(t, r) : void 0;
								});
							},
							[t]
						),
						qs,
						"getReserves"
					);
				return Object(a.useMemo)(
					function () {
						return r.map(function (e, n) {
							var r = e.result,
								a = e.loading,
								i = t[n][0],
								c = t[n][1];
							if (a) return [Ys.LOADING, null];
							if (!i || !c || i.equals(c)) return [Ys.INVALID, null];
							if (!r) return [Ys.NOT_EXISTS, null];
							var o = r.reserve0,
								s = r.reserve1,
								u = i.sortsBefore(c) ? [i, c] : [c, i],
								l = Object(h.a)(u, 2),
								d = l[0],
								b = l[1];
							return [
								Ys.EXISTS,
								new U.g(new U.m(d, o.toString()), new U.m(b, s.toString())),
							];
						});
					},
					[r, t]
				);
			}
			function Hs(e, n) {
				return Vs([[e, n]])[0];
			}
			!(function (e) {
				(e[(e.LOADING = 0)] = "LOADING"),
					(e[(e.NOT_EXISTS = 1)] = "NOT_EXISTS"),
					(e[(e.EXISTS = 2)] = "EXISTS"),
					(e[(e.INVALID = 3)] = "INVALID");
			})(Ys || (Ys = {}));
			var Ws = t(491);
			var Ks,
				Gs = t(151);
			function Qs() {
				var e = Object(v.g)().search;
				return Object(a.useMemo)(
					function () {
						return e && e.length > 1
							? Object(Gs.parse)(e, { parseArrays: !1, ignoreQueryPrefix: !0 })
							: {};
					},
					[e]
				);
			}
			!(function (e) {
				(e.v1 = "v1"), (e.v2 = "v2");
			})(Ks || (Ks = {}));
			var Js = Ks.v2;
			function Xs() {
				var e = Qs().use;
				return e && "string" === typeof e
					? "v1" === e.toLowerCase()
						? Ks.v1
						: Js
					: Ks.v2;
			}
			function Zs(e) {
				var n, t;
				return null ===
					(n = ma(
						ei(),
						"getExchange",
						Object(a.useMemo)(
							function () {
								return [e];
							},
							[e]
						)
					)) ||
					void 0 === n ||
					null === (t = n.result) ||
					void 0 === t
					? void 0
					: t[0];
			}
			var $s = (function (e) {
				Object(S.a)(t, e);
				var n = Object(R.a)(t);
				function t(e, r) {
					return (
						Object(N.a)(this, t),
						n.call(this, r, new U.m(U.p[r.token.chainId], e))
					);
				}
				return t;
			})(U.g);
			function eu(e) {
				var n = e instanceof U.l ? e : void 0,
					t = Zs(
						Boolean(n && n.equals(U.p[n.chainId])) || null === n || void 0 === n
							? void 0
							: n.address
					),
					r = fi(t, n),
					i = di([t])[null !== t && void 0 !== t ? t : ""];
				return Object(a.useMemo)(
					function () {
						return n && r && i && e ? new $s(i.raw, r) : void 0;
					},
					[i, e, n, r]
				);
			}
			function nu() {
				var e = ci(),
					n = ei(),
					t = Object(a.useMemo)(
						function () {
							return Object.keys(e).map(function (e) {
								return [e];
							});
						},
						[e]
					),
					r = fa(n, "getExchange", t, ua);
				return Object(a.useMemo)(
					function () {
						var n;
						return null !==
							(n =
								null === r || void 0 === r
									? void 0
									: r.reduce(function (n, r, a) {
											var i = r.result;
											return (
												(null === i || void 0 === i ? void 0 : i[0]) &&
													i[0] !== Jn.a &&
													(n[i[0]] = e[t[a][0]]),
												n
											);
									  }, {})) && void 0 !== n
							? n
							: {};
					},
					[e, t, r]
				);
			}
			function tu(e) {
				var n,
					t,
					r =
						null === e ||
						void 0 === e ||
						null === (n = e.route) ||
						void 0 === n ||
						null === (t = n.pairs) ||
						void 0 === t
							? void 0
							: t.some(function (e) {
									return e instanceof $s;
							  });
				return r ? Ks.v1 : !1 === r ? Ks.v2 : void 0;
			}
			function ru(e) {
				return Zs(
					Object(a.useMemo)(
						function () {
							if (e && tu(e) === Ks.v1)
								return e.inputAmount instanceof U.m
									? e.inputAmount.token.address
									: e.outputAmount instanceof U.m
									? e.outputAmount.token.address
									: void 0;
						},
						[e]
					)
				);
			}
			var au,
				iu = new U.h("0"),
				cu = new U.h("1");
			function ou(e, n) {
				var t =
					arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iu;
				if (e && !n) return !1;
				if (n && !e) return !0;
				if (e && n) {
					if (
						e.tradeType !== n.tradeType ||
						!Object(U.q)(e.inputAmount.currency, n.inputAmount.currency) ||
						!Object(U.q)(n.outputAmount.currency, n.outputAmount.currency)
					)
						throw new Error("Trades are not comparable");
					return t.equalTo(iu)
						? e.executionPrice.lessThan(n.executionPrice)
						: e.executionPrice.raw
								.multiply(t.add(cu))
								.lessThan(n.executionPrice);
				}
			}
			!(function (e) {
				(e.INPUT = "INPUT"), (e.OUTPUT = "OUTPUT");
			})(au || (au = {}));
			var su = Object(Re.b)("swap/selectCurrency"),
				uu = Object(Re.b)("swap/switchCurrencies"),
				lu = Object(Re.b)("swap/typeInput"),
				du = Object(Re.b)("swap/replaceSwapState"),
				bu = Object(Re.b)("swap/setRecipient"),
				pu = Object(Re.b)("transactions/addTransaction"),
				fu = Object(Re.b)("transactions/clearAllTransactions"),
				ju = Object(Re.b)("transactions/finalizeTransaction"),
				mu = Object(Re.b)("transactions/checkedTransaction");
			function hu() {
				var e = Se(),
					n = e.chainId,
					t = e.account,
					r = Object(De.c)();
				return Object(a.useCallback)(
					function (e) {
						var a =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: {},
							i = a.summary,
							c = a.approval;
						if (t && n) {
							var o = e.hash;
							if (!o) throw Error("No transaction hash found.");
							r(pu({ hash: o, from: t, chainId: n, approval: c, summary: i }));
						}
					},
					[r, n, t]
				);
			}
			function yu() {
				var e,
					n = Se().chainId,
					t = Object(De.d)(function (e) {
						return e.transactions;
					});
				return n && null !== (e = t[n]) && void 0 !== e ? e : {};
			}
			function vu(e) {
				var n = yu();
				return !(!e || !n[e]) && !n[e].receipt;
			}
			function Ou(e) {
				return new Date().getTime() - e.addedTime < 864e5;
			}
			var xu,
				gu,
				wu = new U.h(U.f.BigInt(20), U.f.BigInt(1e4)),
				Cu = new U.h(U.f.BigInt(1e4), U.f.BigInt(1e4)),
				ku = Cu.subtract(wu);
			function Tu(e) {
				var n = e
						? Cu.subtract(
								e.route.pairs.reduce(function (e) {
									return e.multiply(ku);
								}, Cu)
						  )
						: void 0,
					t = e && n ? e.priceImpact.subtract(n) : void 0;
				return {
					priceImpactWithoutFee: t
						? new U.h(
								null === t || void 0 === t ? void 0 : t.numerator,
								null === t || void 0 === t ? void 0 : t.denominator
						  )
						: void 0,
					realizedLPFee:
						n &&
						e &&
						(e.inputAmount instanceof U.m
							? new U.m(
									e.inputAmount.token,
									n.multiply(e.inputAmount.raw).quotient
							  )
							: U.c.ether(n.multiply(e.inputAmount.raw).quotient)),
				};
			}
			function Iu(e, n) {
				var t,
					r,
					a = ((r = n), new U.h(U.f.BigInt(r), U.f.BigInt(1e4)));
				return (
					(t = {}),
					Object(w.a)(
						t,
						au.INPUT,
						null === e || void 0 === e ? void 0 : e.maximumAmountIn(a)
					),
					Object(w.a)(
						t,
						au.OUTPUT,
						null === e || void 0 === e ? void 0 : e.minimumAmountOut(a)
					),
					t
				);
			}
			function Eu(e) {
				return (null === e || void 0 === e ? void 0 : e.lessThan(Ee))
					? (null === e || void 0 === e ? void 0 : e.lessThan(Te))
						? (null === e || void 0 === e ? void 0 : e.lessThan(ke))
							? (null === e || void 0 === e ? void 0 : e.lessThan(Ce))
								? 0
								: 1
							: 2
						: 3
					: 4;
			}
			function Nu(e, n) {
				return e
					? n
						? ""
								.concat(e.executionPrice.invert().toSignificant(6), " ")
								.concat(e.inputAmount.currency.symbol, " / ")
								.concat(e.outputAmount.currency.symbol)
						: ""
								.concat(e.executionPrice.toSignificant(6), " ")
								.concat(e.outputAmount.currency.symbol, " / ")
								.concat(e.inputAmount.currency.symbol)
					: "";
			}
			function Au(e, n) {
				var t = Se().account,
					r = e instanceof U.m ? e.token : void 0,
					i = (function (e, n, t) {
						var r = ma(
							ti(null === e || void 0 === e ? void 0 : e.address, !1),
							"allowance",
							Object(a.useMemo)(
								function () {
									return [n, t];
								},
								[n, t]
							)
						).result;
						return Object(a.useMemo)(
							function () {
								return e && r ? new U.m(e, r.toString()) : void 0;
							},
							[e, r]
						);
					})(r, null !== t && void 0 !== t ? t : void 0, n),
					c = (function (e, n) {
						var t = yu();
						return Object(a.useMemo)(
							function () {
								return (
									"string" === typeof e &&
									"string" === typeof n &&
									Object.keys(t).some(function (r) {
										var a = t[r];
										if (!a) return !1;
										if (a.receipt) return !1;
										var i = a.approval;
										return (
											!!i && i.spender === n && i.tokenAddress === e && Ou(a)
										);
									})
								);
							},
							[t, n, e]
						);
					})(null === r || void 0 === r ? void 0 : r.address, n),
					o = Object(a.useMemo)(
						function () {
							return e && n
								? e.currency === U.d
									? xu.APPROVED
									: i
									? i.lessThan(e)
										? c
											? xu.PENDING
											: xu.NOT_APPROVED
										: xu.APPROVED
									: xu.UNKNOWN
								: xu.UNKNOWN;
						},
						[e, i, c, n]
					),
					s = ti(null === r || void 0 === r ? void 0 : r.address),
					u = hu(),
					l = Object(a.useCallback)(
						Object(m.a)(
							j.a.mark(function t() {
								var a, i;
								return j.a.wrap(function (t) {
									for (;;)
										switch ((t.prev = t.next)) {
											case 0:
												if (o === xu.NOT_APPROVED) {
													t.next = 3;
													break;
												}
												return (
													console.error("approve was called unnecessarily"),
													t.abrupt("return")
												);
											case 3:
												if (r) {
													t.next = 6;
													break;
												}
												return console.error("no token"), t.abrupt("return");
											case 6:
												if (s) {
													t.next = 9;
													break;
												}
												return (
													console.error("tokenContract is null"),
													t.abrupt("return")
												);
											case 9:
												if (e) {
													t.next = 12;
													break;
												}
												return (
													console.error("missing amount to approve"),
													t.abrupt("return")
												);
											case 12:
												if (n) {
													t.next = 15;
													break;
												}
												return console.error("no spender"), t.abrupt("return");
											case 15:
												return (
													(a = !1),
													(t.next = 18),
													s.estimateGas.approve(n, Ws.a).catch(function () {
														return (
															(a = !0),
															s.estimateGas.approve(n, e.raw.toString())
														);
													})
												);
											case 18:
												return (
													(i = t.sent),
													t.abrupt(
														"return",
														s
															.approve(n, a ? e.raw.toString() : Ws.a, {
																gasLimit: rt(i),
															})
															.then(function (t) {
																u(t, {
																	summary: "Approve " + e.currency.symbol,
																	approval: {
																		tokenAddress: r.address,
																		spender: n,
																	},
																});
															})
															.catch(function (e) {
																throw (
																	(console.debug("Failed to approve token", e),
																	e)
																);
															})
													)
												);
											case 20:
											case "end":
												return t.stop();
										}
								}, t);
							})
						),
						[o, r, s, e, n, u]
					);
				return [o, l];
			}
			!(function (e) {
				(e[(e.UNKNOWN = 0)] = "UNKNOWN"),
					(e[(e.NOT_APPROVED = 1)] = "NOT_APPROVED"),
					(e[(e.PENDING = 2)] = "PENDING"),
					(e[(e.APPROVED = 3)] = "APPROVED");
			})(xu || (xu = {})),
				(function (e) {
					(e.CURRENCY_A = "CURRENCY_A"), (e.CURRENCY_B = "CURRENCY_B");
				})(gu || (gu = {}));
			var Su = Object(Re.b)("mint/typeInputMint"),
				Ru = Object(Re.b)("mint/resetMintState");
			function Uu(e, n) {
				var t = Object(a.useState)(e),
					r = Object(h.a)(t, 2),
					i = r[0],
					c = r[1];
				return (
					Object(a.useEffect)(
						function () {
							var t = setTimeout(function () {
								c(e);
							}, n);
							return function () {
								clearTimeout(t);
							};
						},
						[e, n]
					),
					i
				);
			}
			function Bu(e) {
				var n = $n(e),
					t = (function (e) {
						var n,
							t,
							r,
							i = Uu(e, 200),
							c = Object(a.useMemo)(
								function () {
									if (!i || !$n(i)) return [void 0];
									try {
										return i
											? [
													Object(Ei.namehash)(
														"".concat(
															i.toLowerCase().substr(2),
															".addr.reverse"
														)
													),
											  ]
											: [void 0];
									} catch (e) {
										return [void 0];
									}
								},
								[i]
							),
							o = ma(ri(!1), "resolver", c),
							s = null === (n = o.result) || void 0 === n ? void 0 : n[0],
							u = ma(ai(s && !Ni(s) ? s : void 0, !1), "name", c),
							l = i !== e;
						return {
							ENSName: l
								? null
								: null !==
										(t =
											null === (r = u.result) || void 0 === r
												? void 0
												: r[0]) && void 0 !== t
								? t
								: null,
							loading: l || o.loading || u.loading,
						};
					})(n || void 0),
					r = (function (e) {
						var n,
							t,
							r,
							i = Uu(e, 200),
							c = Object(a.useMemo)(
								function () {
									if (!i) return [void 0];
									try {
										return i ? [Object(Ei.namehash)(i)] : [void 0];
									} catch (e) {
										return [void 0];
									}
								},
								[i]
							),
							o = ma(ri(!1), "resolver", c),
							s = null === (n = o.result) || void 0 === n ? void 0 : n[0],
							u = ma(ai(s && !Ni(s) ? s : void 0, !1), "addr", c),
							l = i !== e;
						return {
							address: l
								? null
								: null !==
										(t =
											null === (r = u.result) || void 0 === r
												? void 0
												: r[0]) && void 0 !== t
								? t
								: null,
							loading: l || o.loading || u.loading,
						};
					})(e);
				return {
					loading: t.loading || r.loading,
					address: n || r.address,
					name: t.ENSName ? t.ENSName : (!n && r.address && e) || null,
				};
			}
			var Pu = t(172);
			function _u(e, n) {
				var t = Se().chainId,
					r = t ? je[t] : [],
					i = t ? [ls(e, t), ls(n, t)] : [void 0, void 0],
					c = Object(h.a)(i, 2),
					o = c[0],
					s = c[1],
					u = Object(a.useMemo)(
						function () {
							return ya()(r, function (e) {
								return r.map(function (n) {
									return [e, n];
								});
							}).filter(function (e) {
								var n = Object(h.a)(e, 2),
									t = n[0],
									r = n[1];
								return t.address !== r.address;
							});
						},
						[r]
					),
					l = Vs(
						Object(a.useMemo)(
							function () {
								return o && s
									? [[o, s]]
											.concat(
												Object(oe.a)(
													r.map(function (e) {
														return [o, e];
													})
												),
												Object(oe.a)(
													r.map(function (e) {
														return [s, e];
													})
												),
												Object(oe.a)(u)
											)
											.filter(function (e) {
												return Boolean(e[0] && e[1]);
											})
											.filter(function (e) {
												var n = Object(h.a)(e, 2),
													t = n[0],
													r = n[1];
												return t.address !== r.address;
											})
									: [];
							},
							[o, s, r, u, t]
						)
					);
				return Object(a.useMemo)(
					function () {
						return Object.values(
							l
								.filter(function (e) {
									return Boolean(e[0] === Ys.EXISTS && e[1]);
								})
								.reduce(function (e, n) {
									var t,
										r = Object(h.a)(n, 2)[1];
									return (
										(e[r.liquidityToken.address] =
											null !== (t = e[r.liquidityToken.address]) && void 0 !== t
												? t
												: r),
										e
									);
								}, {})
						);
					},
					[l]
				);
			}
			function Mu() {
				return Object(De.d)(function (e) {
					return e.swap;
				});
			}
			function Du(e, n) {
				if (e && n)
					try {
						var t = Object(Pu.parseUnits)(e, n.decimals).toString();
						if ("0" !== t)
							return n instanceof U.l
								? new U.m(n, U.f.BigInt(t))
								: U.c.ether(U.f.BigInt(t));
					} catch (r) {
						console.debug('Failed to parse input amount: "'.concat(e, '"'), r);
					}
			}
			var Lu = [
				"0xBCfCcbde45cE874adCB698cC183deBcF17952812",
				"0xf164fC0Ec4E93095b804a4795bBe1e041497b92a",
				"0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F",
			];
			function Fu(e, n) {
				return (
					e.route.path.some(function (e) {
						return e.address === n;
					}) ||
					e.route.pairs.some(function (e) {
						return e.liquidityToken.address === n;
					})
				);
			}
			function zu() {
				var e,
					n,
					t,
					r,
					i,
					c,
					o,
					s = Se().account,
					u = Xs(),
					l = Mu(),
					d = l.independentField,
					b = l.typedValue,
					p = l[au.INPUT].currencyId,
					f = l[au.OUTPUT].currencyId,
					j = l.recipient,
					m = li(p),
					y = li(f),
					v = Bu(null !== j && void 0 !== j ? j : void 0),
					O =
						null !== (e = null === j ? s : v.address) && void 0 !== e
							? e
							: null,
					x = ji(null !== s && void 0 !== s ? s : void 0, [
						null !== m && void 0 !== m ? m : void 0,
						null !== y && void 0 !== y ? y : void 0,
					]),
					g = d === au.INPUT,
					C = Du(b, null !== (n = g ? m : y) && void 0 !== n ? n : void 0),
					k = (function (e, n) {
						var t = _u(null === e || void 0 === e ? void 0 : e.currency, n);
						return Object(a.useMemo)(
							function () {
								var r;
								return e &&
									n &&
									t.length > 0 &&
									null !==
										(r = U.n.bestTradeExactIn(t, e, n, {
											maxHops: 3,
											maxNumResults: 1,
										})[0]) &&
									void 0 !== r
									? r
									: null;
							},
							[t, e, n]
						);
					})(g ? C : void 0, null !== y && void 0 !== y ? y : void 0),
					T = (function (e, n) {
						var t = _u(e, null === n || void 0 === n ? void 0 : n.currency);
						return Object(a.useMemo)(
							function () {
								var r;
								return e && n && t.length > 0
									? (console.log(t),
									  null !==
											(r = U.n.bestTradeExactOut(t, e, n, {
												maxHops: 3,
												maxNumResults: 1,
											})[0]) && void 0 !== r
											? r
											: null)
									: null;
							},
							[t, e, n]
						);
					})(null !== m && void 0 !== m ? m : void 0, g ? void 0 : C),
					I = g ? k : T,
					E =
						((t = {}),
						Object(w.a)(t, au.INPUT, x[0]),
						Object(w.a)(t, au.OUTPUT, x[1]),
						t),
					N =
						((r = {}),
						Object(w.a)(r, au.INPUT, null !== m && void 0 !== m ? m : void 0),
						Object(w.a)(r, au.OUTPUT, null !== y && void 0 !== y ? y : void 0),
						r),
					A = (function (e, n, t, r) {
						var a = eu(n),
							i = eu(t),
							c = n === U.d,
							o = t === U.d,
							s = [];
						c && i ? (s = [i]) : o && a ? (s = [a]) : a && i && (s = [a, i]);
						var u,
							l = n && s && s.length > 0 && new U.j(s, n, t);
						try {
							u =
								l && r
									? new U.n(l, r, e ? U.o.EXACT_INPUT : U.o.EXACT_OUTPUT)
									: void 0;
						} catch (d) {
							console.debug("Failed to create V1 trade", d);
						}
						return u;
					})(g, N[au.INPUT], N[au.OUTPUT], C);
				(s || (i = "Connect Wallet"), C) ||
					(i = null !== (c = i) && void 0 !== c ? c : "Enter an amount");
				(N[au.INPUT] && N[au.OUTPUT]) ||
					(i = null !== (o = i) && void 0 !== o ? o : "Select a token");
				var S,
					R,
					B = $n(O);
				O && B
					? (-1 !== Lu.indexOf(B) || (k && Fu(k, B)) || (T && Fu(T, B))) &&
					  (i = null !== (S = i) && void 0 !== S ? S : "Invalid recipient")
					: (i = null !== (R = i) && void 0 !== R ? R : "Enter a recipient");
				var P = Ba(),
					_ = Object(h.a)(P, 1)[0],
					M = I && _ && Iu(I, _),
					D = A && _ && Iu(A, _),
					L = [
						E[au.INPUT],
						u === Ks.v1 ? (D ? D[au.INPUT] : null) : M ? M[au.INPUT] : null,
					],
					F = L[0],
					z = L[1];
				return (
					F &&
						z &&
						F.lessThan(z) &&
						(i = "Insufficient " + z.currency.symbol + " balance"),
					{
						currencies: N,
						currencyBalances: E,
						parsedAmount: C,
						v2Trade: null !== I && void 0 !== I ? I : void 0,
						inputError: i,
						v1Trade: A,
					}
				);
			}
			function Yu(e) {
				if ("string" === typeof e) {
					var n = $n(e);
					if (n) return n;
					if ("ETH" === e.toUpperCase()) return "ETH";
					if (!1 === n) return "ETH";
				}
				return null !== "ETH" ? "ETH" : "";
			}
			var qu = /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,
				Vu = /^0x[a-fA-F0-9]{40}$/;
			function Hu(e) {
				var n,
					t = Yu(e.inputCurrency),
					r = Yu(e.outputCurrency);
				t === r && ("string" === typeof e.outputCurrency ? (t = "") : (r = ""));
				var a,
					i = (function (e) {
						return "string" !== typeof e
							? null
							: $n(e) || (qu.test(e) || Vu.test(e) ? e : null);
					})(e.recipient);
				return (
					(n = {}),
					Object(w.a)(n, au.INPUT, { currencyId: t }),
					Object(w.a)(n, au.OUTPUT, { currencyId: r }),
					Object(w.a)(
						n,
						"typedValue",
						"string" !== typeof (a = e.exactAmount) || isNaN(parseFloat(a))
							? ""
							: a
					),
					Object(w.a)(
						n,
						"independentField",
						(function (e) {
							return "string" === typeof e && "output" === e.toLowerCase()
								? au.OUTPUT
								: au.INPUT;
						})(e.exactField)
					),
					Object(w.a)(n, "recipient", i),
					n
				);
			}
			var Wu = U.f.BigInt(0);
			function Ku() {
				return Object(De.d)(function (e) {
					return e.mint;
				});
			}
			function Gu(e) {
				if (e)
					return e.currency === U.d
						? U.f.greaterThan(e.raw, Ne)
							? U.c.ether(U.f.subtract(e.raw, Ne))
							: U.c.ether(U.f.BigInt(0))
						: e;
			}
			function Qu() {
				var e = Object(u.a)([
					"\n  position: relative;\n  max-width: 436px;\n  width: 100%;\n",
				]);
				return (
					(Qu = function () {
						return e;
					}),
					e
				);
			}
			var Ju = Object(l.default)(s.f)(Qu());
			function Xu(e) {
				var n = e.children;
				return Object(r.jsx)(Ju, { children: n });
			}
			function Zu() {
				var e = Object(u.a)([
					"\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n",
				]);
				return (
					(Zu = function () {
						return e;
					}),
					e
				);
			}
			function $u() {
				var e = Object(u.a)([
					"\n  padding: 0.5rem 1rem;\n  background-color: ",
					";\n  border: 1px solid ",
					";\n  border-radius: 0.5rem;\n  font-size: 1rem;\n  ",
					" {\n    padding: 0.25rem 0.5rem;\n  }\n  font-weight: 500;\n  cursor: pointer;\n  margin: 0.25rem;\n  overflow: hidden;\n  color: ",
					";\n  :hover {\n    border: 1px solid ",
					";\n  }\n  :focus {\n    border: 1px solid ",
					";\n    outline: none;\n  }\n",
				]);
				return (
					($u = function () {
						return e;
					}),
					e
				);
			}
			function el() {
				var e = Object(u.a)([
					"\n  :hover {\n    cursor: pointer;\n  }\n  color: ",
					";\n",
				]);
				return (
					(el = function () {
						return e;
					}),
					e
				);
			}
			function nl() {
				var e = Object(u.a)(["\n  position: relative;\n"]);
				return (
					(nl = function () {
						return e;
					}),
					e
				);
			}
			var tl = l.default.div(nl()),
				rl = Object(l.default)(s.v)(el(), function (e) {
					return e.theme.colors.primary;
				}),
				al =
					(l.default.button(
						$u(),
						function (e) {
							return e.theme.colors.primaryDark;
						},
						function (e) {
							return e.theme.colors.primaryDark;
						},
						function (e) {
							return e.theme.mediaQueries.sm;
						},
						function (e) {
							return e.theme.colors.primary;
						},
						function (e) {
							return e.theme.colors.primary;
						},
						function (e) {
							return e.theme.colors.primary;
						}
					),
					l.default.span(Zu()));
			function il(e) {
				var n,
					t,
					a,
					i,
					c,
					o,
					u,
					l,
					d = e.noLiquidity,
					b = e.price,
					p = e.currencies,
					f = e.parsedAmounts,
					j = e.poolTokenPercentage,
					m = e.onAdd;
				return Object(r.jsxs)(r.Fragment, {
					children: [
						Object(r.jsxs)(Fn, {
							children: [
								Object(r.jsxs)(kn, {
									children: [
										null === (n = p[gu.CURRENCY_A]) || void 0 === n
											? void 0
											: n.symbol,
										" Deposited",
									],
								}),
								Object(r.jsxs)(qn, {
									children: [
										Object(r.jsx)(oc, {
											currency: p[gu.CURRENCY_A],
											style: { marginRight: "8px" },
										}),
										Object(r.jsx)(kn, {
											children:
												null === (t = f[gu.CURRENCY_A]) || void 0 === t
													? void 0
													: t.toSignificant(6),
										}),
									],
								}),
							],
						}),
						Object(r.jsxs)(Fn, {
							children: [
								Object(r.jsxs)(kn, {
									children: [
										null === (a = p[gu.CURRENCY_B]) || void 0 === a
											? void 0
											: a.symbol,
										" Deposited",
									],
								}),
								Object(r.jsxs)(qn, {
									children: [
										Object(r.jsx)(oc, {
											currency: p[gu.CURRENCY_B],
											style: { marginRight: "8px" },
										}),
										Object(r.jsx)(kn, {
											children:
												null === (i = f[gu.CURRENCY_B]) || void 0 === i
													? void 0
													: i.toSignificant(6),
										}),
									],
								}),
							],
						}),
						Object(r.jsxs)(Fn, {
							children: [
								Object(r.jsx)(kn, { children: "Rates" }),
								Object(r.jsx)(kn, {
									children: "1 "
										.concat(
											null === (c = p[gu.CURRENCY_A]) || void 0 === c
												? void 0
												: c.symbol,
											" = "
										)
										.concat(
											null === b || void 0 === b ? void 0 : b.toSignificant(4),
											" "
										)
										.concat(
											null === (o = p[gu.CURRENCY_B]) || void 0 === o
												? void 0
												: o.symbol
										),
								}),
							],
						}),
						Object(r.jsx)(Fn, {
							style: { justifyContent: "flex-end" },
							children: Object(r.jsx)(kn, {
								children: "1 "
									.concat(
										null === (u = p[gu.CURRENCY_B]) || void 0 === u
											? void 0
											: u.symbol,
										" = "
									)
									.concat(
										null === b || void 0 === b
											? void 0
											: b.invert().toSignificant(4),
										" "
									)
									.concat(
										null === (l = p[gu.CURRENCY_A]) || void 0 === l
											? void 0
											: l.symbol
									),
							}),
						}),
						Object(r.jsxs)(Fn, {
							children: [
								Object(r.jsx)(kn, { children: "Share of Pool:" }),
								Object(r.jsxs)(kn, {
									children: [
										d
											? "100"
											: null === j || void 0 === j
											? void 0
											: j.toSignificant(4),
										"%",
									],
								}),
							],
						}),
						Object(r.jsx)(s.c, {
							mt: "20px",
							onClick: m,
							children: d ? "Create Pool & Supply" : "Confirm Supply",
						}),
					],
				});
			}
			function cl(e) {
				var n,
					t,
					a,
					i,
					c,
					o,
					u,
					l,
					d = e.currencies,
					b = e.noLiquidity,
					p = e.poolTokenPercentage,
					f = e.price;
				return Object(r.jsx)(We, {
					gap: "md",
					children: Object(r.jsxs)(Yn, {
						justify: "space-around",
						gap: "4px",
						children: [
							Object(r.jsxs)(We, {
								justify: "center",
								children: [
									Object(r.jsx)(Cn, {
										children:
											null !==
												(n =
													null === f || void 0 === f
														? void 0
														: f.toSignificant(6)) && void 0 !== n
												? n
												: "-",
									}),
									Object(r.jsxs)(s.v, {
										fontSize: "14px",
										color: "textSubtle",
										pt: 1,
										children: [
											null === (t = d[gu.CURRENCY_B]) || void 0 === t
												? void 0
												: t.symbol,
											" per ",
											null === (a = d[gu.CURRENCY_A]) || void 0 === a
												? void 0
												: a.symbol,
										],
									}),
								],
							}),
							Object(r.jsxs)(We, {
								justify: "center",
								children: [
									Object(r.jsx)(Cn, {
										children:
											null !==
												(i =
													null === f ||
													void 0 === f ||
													null === (c = f.invert()) ||
													void 0 === c
														? void 0
														: c.toSignificant(6)) && void 0 !== i
												? i
												: "-",
									}),
									Object(r.jsxs)(s.v, {
										fontSize: "14px",
										color: "textSubtle",
										pt: 1,
										children: [
											null === (o = d[gu.CURRENCY_A]) || void 0 === o
												? void 0
												: o.symbol,
											" per ",
											null === (u = d[gu.CURRENCY_B]) || void 0 === u
												? void 0
												: u.symbol,
										],
									}),
								],
							}),
							Object(r.jsxs)(We, {
								justify: "center",
								children: [
									Object(r.jsxs)(Cn, {
										children: [
											b && f
												? "100"
												: null !==
														(l = (
															null === p || void 0 === p
																? void 0
																: p.lessThan(ge)
														)
															? "<0.01"
															: null === p || void 0 === p
															? void 0
															: p.toFixed(2)) && void 0 !== l
												? l
												: "0",
											"%",
										],
									}),
									Object(r.jsx)(s.v, {
										fontSize: "14px",
										color: "textSubtle",
										pt: 1,
										children: "Share of Pool",
									}),
								],
							}),
						],
					}),
				});
			}
			function ol() {
				var e = Object(u.a)([
					"\n  border: 2px solid ",
					";\n  border-radius: 16px;\n  padding: 16px;\n",
				]);
				return (
					(ol = function () {
						return e;
					}),
					e
				);
			}
			var sl = l.default.div(ol(), function (e) {
					return e.theme.colors.borderColor;
				}),
				ul = function (e) {
					var n = Ur(),
						t = Object(x.c)(),
						a = t.account,
						i = t.activate,
						c = t.deactivate,
						o = Object(s.z)(
							function (e) {
								return i("walletconnect" === e ? ce : "bsc" === e ? ie : ae);
							},
							c,
							a
						).onPresentConnectModal;
					return Object(r.jsx)(
						s.c,
						Object(V.a)(
							Object(V.a)({ onClick: o }, e),
							{},
							{ children: n(292, "Unlock Wallet") }
						)
					);
				};
			function ll(e) {
				var n,
					t,
					i,
					c,
					o,
					u,
					l,
					d,
					b,
					p,
					f,
					y = e.match.params,
					v = y.currencyIdA,
					O = y.currencyIdB,
					x = e.history,
					g = Se(),
					C = g.account,
					k = g.chainId,
					T = g.library,
					I = li(v),
					E = li(O),
					N = Boolean(
						k &&
							((I && Object(U.q)(I, U.p[k])) || (E && Object(U.q)(E, U.p[k])))
					),
					A = Ua(),
					S = Ku(),
					R = S.independentField,
					B = S.typedValue,
					P = S.otherTypedValue,
					_ = (function (e, n) {
						var t,
							r,
							i,
							c,
							o,
							s,
							u,
							l = Se(),
							d = l.account,
							b = l.chainId,
							p = Ku(),
							f = p.independentField,
							j = p.typedValue,
							m = p.otherTypedValue,
							y = f === gu.CURRENCY_A ? gu.CURRENCY_B : gu.CURRENCY_A,
							v = Object(a.useMemo)(
								function () {
									var t;
									return (
										(t = {}),
										Object(w.a)(
											t,
											gu.CURRENCY_A,
											null !== e && void 0 !== e ? e : void 0
										),
										Object(w.a)(
											t,
											gu.CURRENCY_B,
											null !== n && void 0 !== n ? n : void 0
										),
										t
									);
								},
								[e, n]
							),
							O = Hs(v[gu.CURRENCY_A], v[gu.CURRENCY_B]),
							x = Object(h.a)(O, 2),
							g = x[0],
							C = x[1],
							k = ss(null === C || void 0 === C ? void 0 : C.liquidityToken),
							T = g === Ys.NOT_EXISTS || Boolean(k && U.f.equal(k.raw, Wu)),
							I = ji(null !== d && void 0 !== d ? d : void 0, [
								v[gu.CURRENCY_A],
								v[gu.CURRENCY_B],
							]),
							E =
								((t = {}),
								Object(w.a)(t, gu.CURRENCY_A, I[0]),
								Object(w.a)(t, gu.CURRENCY_B, I[1]),
								t),
							N = Du(j, v[f]),
							A = Object(a.useMemo)(
								function () {
									if (T) return m && v[y] ? Du(m, v[y]) : void 0;
									if (N) {
										var t = ds(N, b),
											r = [ls(e, b), ls(n, b)],
											a = r[0],
											i = r[1];
										if (a && i && t && C) {
											var c = y === gu.CURRENCY_B ? n : e,
												o =
													y === gu.CURRENCY_B
														? C.priceOf(a).quote(t)
														: C.priceOf(i).quote(t);
											return c === U.d ? U.c.ether(o.raw) : o;
										}
									}
								},
								[T, m, v, y, N, e, b, n, C]
							),
							S =
								((r = {}),
								Object(w.a)(r, gu.CURRENCY_A, f === gu.CURRENCY_A ? N : A),
								Object(w.a)(r, gu.CURRENCY_B, f === gu.CURRENCY_A ? A : N),
								r),
							R = Object(a.useMemo)(
								function () {
									if (T) {
										var n = S[gu.CURRENCY_A],
											t = S[gu.CURRENCY_B];
										return n && t
											? new U.i(n.currency, t.currency, n.raw, t.raw)
											: void 0;
									}
									var r = ls(e, b);
									return C && r ? C.priceOf(r) : void 0;
								},
								[b, e, T, C, S]
							),
							B = Object(a.useMemo)(
								function () {
									var e = S[gu.CURRENCY_A],
										n = S[gu.CURRENCY_B],
										t = [ds(e, b), ds(n, b)],
										r = t[0],
										a = t[1];
									return C && k && r && a
										? C.getLiquidityMinted(k, r, a)
										: void 0;
								},
								[S, b, C, k]
							),
							P = Object(a.useMemo)(
								function () {
									return B && k ? new U.h(B.raw, k.add(B).raw) : void 0;
								},
								[B, k]
							);
						d || (o = "Connect Wallet"),
							g === Ys.INVALID &&
								(o =
									null !== (s = o) && void 0 !== s
										? s
										: Rr(136, "Invalid pair")),
							(S[gu.CURRENCY_A] && S[gu.CURRENCY_B]) ||
								(o =
									null !== (u = o) && void 0 !== u
										? u
										: Rr(84, "Enter an amount"));
						var _,
							M,
							D = S[gu.CURRENCY_A],
							L = S[gu.CURRENCY_B];
						return (
							D &&
								(null === E ||
								void 0 === E ||
								null === (i = E[gu.CURRENCY_A]) ||
								void 0 === i
									? void 0
									: i.lessThan(D)) &&
								(o =
									"Insufficient " +
									(null === (_ = v[gu.CURRENCY_A]) || void 0 === _
										? void 0
										: _.symbol) +
									" balance"),
							L &&
								(null === E ||
								void 0 === E ||
								null === (c = E[gu.CURRENCY_B]) ||
								void 0 === c
									? void 0
									: c.lessThan(L)) &&
								(o =
									"Insufficient " +
									(null === (M = v[gu.CURRENCY_B]) || void 0 === M
										? void 0
										: M.symbol) +
									" balance"),
							{
								dependentField: y,
								currencies: v,
								pair: C,
								pairState: g,
								currencyBalances: E,
								parsedAmounts: S,
								price: R,
								noLiquidity: T,
								liquidityMinted: B,
								poolTokenPercentage: P,
								error: o,
							}
						);
					})(
						null !== I && void 0 !== I ? I : void 0,
						null !== E && void 0 !== E ? E : void 0
					),
					M = _.dependentField,
					D = _.currencies,
					L = _.pair,
					F = _.pairState,
					z = _.currencyBalances,
					Y = _.parsedAmounts,
					q = _.price,
					H = _.noLiquidity,
					W = _.liquidityMinted,
					K = _.poolTokenPercentage,
					G = _.error,
					Q = (function (e) {
						var n = Object(De.c)();
						return {
							onFieldAInput: Object(a.useCallback)(
								function (t) {
									n(
										Su({
											field: gu.CURRENCY_A,
											typedValue: t,
											noLiquidity: !0 === e,
										})
									);
								},
								[n, e]
							),
							onFieldBInput: Object(a.useCallback)(
								function (t) {
									n(
										Su({
											field: gu.CURRENCY_B,
											typedValue: t,
											noLiquidity: !0 === e,
										})
									);
								},
								[n, e]
							),
						};
					})(H),
					J = Q.onFieldAInput,
					X = Q.onFieldBInput,
					Z = !G,
					$ = Object(a.useState)(!1),
					ee = Object(h.a)($, 2),
					ne = ee[0],
					te = ee[1],
					re = Object(a.useState)(!1),
					ae = Object(h.a)(re, 2),
					ie = ae[0],
					ce = ae[1],
					ue = Pa(),
					le = Object(h.a)(ue, 1)[0],
					de = Ba(),
					be = Object(h.a)(de, 1)[0],
					pe = Object(a.useState)(""),
					fe = Object(h.a)(pe, 2),
					je = fe[0],
					me = fe[1],
					he =
						((i = {}),
						Object(w.a)(i, R, B),
						Object(w.a)(
							i,
							M,
							H
								? P
								: null !==
										(n =
											null === (t = Y[M]) || void 0 === t
												? void 0
												: t.toSignificant(6)) && void 0 !== n
								? n
								: ""
						),
						i),
					ye = [gu.CURRENCY_A, gu.CURRENCY_B].reduce(function (e, n) {
						return Object(V.a)(
							Object(V.a)({}, e),
							{},
							Object(w.a)({}, n, Gu(z[n]))
						);
					}, {}),
					ve = [gu.CURRENCY_A, gu.CURRENCY_B].reduce(function (e, n) {
						var t, r;
						return Object(V.a)(
							Object(V.a)({}, e),
							{},
							Object(w.a)(
								{},
								n,
								null === (t = ye[n]) || void 0 === t
									? void 0
									: t.equalTo(null !== (r = Y[n]) && void 0 !== r ? r : "0")
							)
						);
					}, {}),
					Oe = Au(Y[gu.CURRENCY_A], se),
					xe = Object(h.a)(Oe, 2),
					ge = xe[0],
					we = xe[1],
					Ce = Au(Y[gu.CURRENCY_B], se),
					ke = Object(h.a)(Ce, 2),
					Te = ke[0],
					Ie = ke[1],
					Ee = hu();
				function Ne() {
					return Ae.apply(this, arguments);
				}
				function Ae() {
					return (Ae = Object(m.a)(
						j.a.mark(function e() {
							var n, t, r, a, i, c, o, s, u, l, d, b, p, f, m, h, y;
							return j.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											if (k && T && C) {
												e.next = 2;
												break;
											}
											return e.abrupt("return");
										case 2:
											if (
												((t = ct(0, T, C)),
												(r = Y[gu.CURRENCY_A]),
												(a = Y[gu.CURRENCY_B]),
												r && a && I && E)
											) {
												e.next = 6;
												break;
											}
											return e.abrupt("return");
										case 6:
											return (
												(n = {}),
												Object(w.a)(n, gu.CURRENCY_A, at(r, H ? 0 : be)[0]),
												Object(w.a)(n, gu.CURRENCY_B, at(a, H ? 0 : be)[0]),
												(i = n),
												(c = Math.ceil(Date.now() / 1e3) + le),
												I === U.d || E === U.d
													? ((p = E === U.d),
													  (o = t.estimateGas.addLiquidityETH),
													  (s = t.addLiquidityETH),
													  (u = [
															null !==
																(d =
																	null === (b = ls(p ? I : E, k)) ||
																	void 0 === b
																		? void 0
																		: b.address) && void 0 !== d
																? d
																: "",
															(p ? r : a).raw.toString(),
															i[p ? gu.CURRENCY_A : gu.CURRENCY_B].toString(),
															i[p ? gu.CURRENCY_B : gu.CURRENCY_A].toString(),
															C,
															c,
													  ]),
													  (l = Xn.a.from((p ? a : r).raw.toString())))
													: ((o = t.estimateGas.addLiquidity),
													  (s = t.addLiquidity),
													  (u = [
															null !==
																(f =
																	null === (m = ls(I, k)) || void 0 === m
																		? void 0
																		: m.address) && void 0 !== f
																? f
																: "",
															null !==
																(h =
																	null === (y = ls(E, k)) || void 0 === y
																		? void 0
																		: y.address) && void 0 !== h
																? h
																: "",
															r.raw.toString(),
															a.raw.toString(),
															i[gu.CURRENCY_A].toString(),
															i[gu.CURRENCY_B].toString(),
															C,
															c,
													  ]),
													  (l = null)),
												ce(!0),
												(e.next = 12),
												o
													.apply(
														void 0,
														Object(oe.a)(u).concat([l ? { value: l } : {}])
													)
													.then(function (e) {
														return s
															.apply(
																void 0,
																Object(oe.a)(u).concat([
																	Object(V.a)(
																		Object(V.a)({}, l ? { value: l } : {}),
																		{},
																		{ gasLimit: rt(e) }
																	),
																])
															)
															.then(function (e) {
																var n, t, r, a;
																ce(!1),
																	Ee(e, {
																		summary:
																			"Add " +
																			(null === (n = Y[gu.CURRENCY_A]) ||
																			void 0 === n
																				? void 0
																				: n.toSignificant(3)) +
																			" " +
																			(null === (t = D[gu.CURRENCY_A]) ||
																			void 0 === t
																				? void 0
																				: t.symbol) +
																			" and " +
																			(null === (r = Y[gu.CURRENCY_B]) ||
																			void 0 === r
																				? void 0
																				: r.toSignificant(3)) +
																			" " +
																			(null === (a = D[gu.CURRENCY_B]) ||
																			void 0 === a
																				? void 0
																				: a.symbol),
																	}),
																	me(e.hash);
															});
													})
													.catch(function (e) {
														console.log(e),
															ce(!1),
															4001 !==
																(null === e || void 0 === e
																	? void 0
																	: e.code) && console.error(e);
													})
											);
										case 12:
										case "end":
											return e.stop();
									}
							}, e);
						})
					)).apply(this, arguments);
				}
				var Re = function () {
						var e, n, t, a;
						return H
							? Object(r.jsx)(We, {
									gap: "20px",
									children: Object(r.jsx)(Wt, {
										mt: "20px",
										borderRadius: "20px",
										children: Object(r.jsxs)(zn, {
											children: [
												Object(r.jsx)(s.v, {
													fontSize: "48px",
													mr: "8px",
													children:
														(null === (e = D[gu.CURRENCY_A]) || void 0 === e
															? void 0
															: e.symbol) +
														"/" +
														(null === (n = D[gu.CURRENCY_B]) || void 0 === n
															? void 0
															: n.symbol),
												}),
												Object(r.jsx)(So, {
													currency0: D[gu.CURRENCY_A],
													currency1: D[gu.CURRENCY_B],
													size: 30,
												}),
											],
										}),
									}),
							  })
							: Object(r.jsxs)(We, {
									gap: "20px",
									children: [
										Object(r.jsxs)(zn, {
											style: { marginTop: "20px" },
											children: [
												Object(r.jsx)(s.v, {
													fontSize: "48px",
													mr: "8px",
													children:
														null === W || void 0 === W
															? void 0
															: W.toSignificant(6),
												}),
												Object(r.jsx)(So, {
													currency0: D[gu.CURRENCY_A],
													currency1: D[gu.CURRENCY_B],
													size: 30,
												}),
											],
										}),
										Object(r.jsx)(Vn, {
											children: Object(r.jsx)(s.v, {
												fontSize: "24px",
												children:
													(null === (t = D[gu.CURRENCY_A]) || void 0 === t
														? void 0
														: t.symbol) +
													"/" +
													(null === (a = D[gu.CURRENCY_B]) || void 0 === a
														? void 0
														: a.symbol) +
													" Pool Tokens",
											}),
										}),
										Object(r.jsx)(An, {
											fontSize: 12,
											textAlign: "left",
											padding: "8px 0 0 0 ",
											children: "Output is estimated. If the price changes by more than ".concat(
												be / 100,
												"% your transaction will revert."
											),
										}),
									],
							  });
					},
					Ue = function () {
						return Object(r.jsx)(il, {
							price: q,
							currencies: D,
							parsedAmounts: Y,
							noLiquidity: H,
							onAdd: Ne,
							poolTokenPercentage: K,
						});
					},
					Be = "Supplying "
						.concat(
							null === (c = Y[gu.CURRENCY_A]) || void 0 === c
								? void 0
								: c.toSignificant(6),
							" "
						)
						.concat(
							null === (o = D[gu.CURRENCY_A]) || void 0 === o
								? void 0
								: o.symbol,
							" and "
						)
						.concat(
							null === (u = Y[gu.CURRENCY_B]) || void 0 === u
								? void 0
								: u.toSignificant(6),
							" "
						)
						.concat(
							null === (l = D[gu.CURRENCY_B]) || void 0 === l
								? void 0
								: l.symbol
						),
					Pe = Object(a.useCallback)(
						function (e) {
							var n = us(e);
							n === O
								? x.push("/add/".concat(O, "/").concat(v))
								: x.push("/add/".concat(n, "/").concat(O));
						},
						[O, x, v]
					),
					_e = Object(a.useCallback)(
						function (e) {
							var n = us(e);
							v === n
								? O
									? x.push("/add/".concat(O, "/").concat(n))
									: x.push("/add/".concat(n))
								: x.push("/add/".concat(v || "ETH", "/").concat(n));
						},
						[v, x, O]
					),
					Me = Object(a.useCallback)(
						function () {
							te(!1), je && J(""), me("");
						},
						[J, je]
					);
				return Object(r.jsxs)(r.Fragment, {
					children: [
						Object(r.jsx)(Dr, { activeIndex: 1 }),
						Object(r.jsxs)(Xu, {
							children: [
								Object(r.jsx)(is, { adding: !0 }),
								Object(r.jsxs)(tl, {
									children: [
										Object(r.jsx)(Ir, {
											isOpen: ne,
											onDismiss: Me,
											attemptingTxn: ie,
											hash: je,
											content: function () {
												return Object(r.jsx)(Cr, {
													title: H
														? "You are creating a pool"
														: "You will receive",
													onDismiss: Me,
													topContent: Re,
													bottomContent: Ue,
												});
											},
											pendingText: Be,
										}),
										Object(r.jsx)(s.g, {
											children: Object(r.jsxs)(We, {
												gap: "20px",
												children: [
													H &&
														Object(r.jsx)(He, {
															children: Object(r.jsx)(sl, {
																children: Object(r.jsxs)(We, {
																	gap: "12px",
																	children: [
																		Object(r.jsx)(s.v, {
																			children:
																				"You are the first liquidity provider.",
																		}),
																		Object(r.jsx)(s.v, {
																			children:
																				"The ratio of tokens you add will set the price of this pool.",
																		}),
																		Object(r.jsx)(s.v, {
																			children:
																				"Once you are happy with the rate click supply to review.",
																		}),
																	],
																}),
															}),
														}),
													Object(r.jsx)(Go, {
														value: he[gu.CURRENCY_A],
														onUserInput: J,
														onMax: function () {
															var e, n;
															J(
																null !==
																	(e =
																		null === (n = ye[gu.CURRENCY_A]) ||
																		void 0 === n
																			? void 0
																			: n.toExact()) && void 0 !== e
																	? e
																	: ""
															);
														},
														onCurrencySelect: Pe,
														showMaxButton: !ve[gu.CURRENCY_A],
														currency: D[gu.CURRENCY_A],
														id: "add-liquidity-input-tokena",
														showCommonBases: !1,
													}),
													Object(r.jsx)(He, {
														children: Object(r.jsx)(s.a, {
															color: "textSubtle",
														}),
													}),
													Object(r.jsx)(Go, {
														value: he[gu.CURRENCY_B],
														onUserInput: X,
														onCurrencySelect: _e,
														onMax: function () {
															var e, n;
															X(
																null !==
																	(e =
																		null === (n = ye[gu.CURRENCY_B]) ||
																		void 0 === n
																			? void 0
																			: n.toExact()) && void 0 !== e
																	? e
																	: ""
															);
														},
														showMaxButton: !ve[gu.CURRENCY_B],
														currency: D[gu.CURRENCY_B],
														id: "add-liquidity-input-tokenb",
														showCommonBases: !1,
													}),
													D[gu.CURRENCY_A] &&
														D[gu.CURRENCY_B] &&
														F !== Ys.INVALID &&
														Object(r.jsxs)("div", {
															children: [
																Object(r.jsx)(s.v, {
																	style: {
																		textTransform: "uppercase",
																		fontWeight: 600,
																	},
																	color: "textSubtle",
																	fontSize: "12px",
																	mb: "2px",
																	children: H
																		? "Initial prices and pool share"
																		: "Prices and pool share",
																}),
																Object(r.jsx)(sl, {
																	children: Object(r.jsx)(cl, {
																		currencies: D,
																		poolTokenPercentage: K,
																		noLiquidity: H,
																		price: q,
																	}),
																}),
															],
														}),
													C
														? Object(r.jsxs)(We, {
																gap: "md",
																children: [
																	(ge === xu.NOT_APPROVED ||
																		ge === xu.PENDING ||
																		Te === xu.NOT_APPROVED ||
																		Te === xu.PENDING) &&
																		Z &&
																		Object(r.jsxs)(Fn, {
																			children: [
																				ge !== xu.APPROVED &&
																					Object(r.jsx)(s.c, {
																						onClick: we,
																						disabled: ge === xu.PENDING,
																						style: {
																							width:
																								Te !== xu.APPROVED
																									? "48%"
																									: "100%",
																						},
																						children:
																							ge === xu.PENDING
																								? Object(r.jsxs)(al, {
																										children: [
																											"Approving ",
																											null ===
																												(d =
																													D[gu.CURRENCY_A]) ||
																											void 0 === d
																												? void 0
																												: d.symbol,
																										],
																								  })
																								: "Approve ".concat(
																										null ===
																											(b = D[gu.CURRENCY_A]) ||
																											void 0 === b
																											? void 0
																											: b.symbol
																								  ),
																					}),
																				Te !== xu.APPROVED &&
																					Object(r.jsx)(s.c, {
																						onClick: Ie,
																						disabled: Te === xu.PENDING,
																						style: {
																							width:
																								ge !== xu.APPROVED
																									? "48%"
																									: "100%",
																						},
																						children:
																							Te === xu.PENDING
																								? Object(r.jsxs)(al, {
																										children: [
																											"Approving ",
																											null ===
																												(p =
																													D[gu.CURRENCY_B]) ||
																											void 0 === p
																												? void 0
																												: p.symbol,
																										],
																								  })
																								: "Approve ".concat(
																										null ===
																											(f = D[gu.CURRENCY_B]) ||
																											void 0 === f
																											? void 0
																											: f.symbol
																								  ),
																					}),
																			],
																		}),
																	Object(r.jsx)(s.c, {
																		onClick: function () {
																			A ? Ne() : te(!0);
																		},
																		disabled:
																			!Z ||
																			ge !== xu.APPROVED ||
																			Te !== xu.APPROVED,
																		variant:
																			!Z && Y[gu.CURRENCY_A] && Y[gu.CURRENCY_B]
																				? "danger"
																				: "primary",
																		fullWidth: !0,
																		children:
																			null !== G && void 0 !== G ? G : "Supply",
																	}),
																],
														  })
														: Object(r.jsx)(ul, { fullWidth: !0 }),
												],
											}),
										}),
									],
								}),
							],
						}),
						L && !H && F !== Ys.INVALID
							? Object(r.jsx)(We, {
									style: { minWidth: "20rem", marginTop: "1rem" },
									children: Object(r.jsx)(Fs, { showUnwrapped: N, pair: L }),
							  })
							: null,
					],
				});
			}
			function dl() {
				return Object(r.jsx)(v.a, { to: "/add/" });
			}
			var bl = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;
			function pl(e) {
				var n = e.match.params.currencyIdA.match(bl);
				return (null === n || void 0 === n ? void 0 : n.length)
					? Object(r.jsx)(v.a, { to: "/add/".concat(n[1], "/").concat(n[2]) })
					: Object(r.jsx)(ll, Object(V.a)({}, e));
			}
			function fl(e) {
				var n = e.match.params,
					t = n.currencyIdA,
					a = n.currencyIdB;
				return t.toLowerCase() === a.toLowerCase()
					? Object(r.jsx)(v.a, { to: "/add/".concat(t) })
					: Object(r.jsx)(ll, Object(V.a)({}, e));
			}
			function jl(e) {
				var n = e.message;
				return Object(r.jsx)(We, {
					style: {
						minHeight: 200,
						justifyContent: "center",
						alignItems: "center",
					},
					children: Object(r.jsx)(kn, { children: n }),
				});
			}
			var ml = Object(v.h)(function (e) {
				var n = e.token,
					t = e.V1LiquidityBalance,
					a = Se().chainId;
				return Object(r.jsx)(Ls, {
					children: Object(r.jsxs)(We, {
						gap: "12px",
						children: [
							Object(r.jsx)(Ds, {
								children: Object(r.jsxs)(qn, {
									children: [
										Object(r.jsx)(So, { currency0: n, margin: !0, size: 20 }),
										Object(r.jsx)(s.v, {
											fontSize: "20px",
											style: { marginLeft: "" },
											children: "".concat(
												a && n.equals(U.p[a]) ? "WETH" : n.symbol,
												"/ETH"
											),
										}),
										Object(r.jsx)(s.v, {
											fontSize: "12px",
											ml: "0.5rem",
											px: "0.75rem",
											py: "0.25rem",
											style: { borderRadius: "1rem" },
											color: "black",
											children: "V1",
										}),
									],
								}),
							}),
							Object(r.jsx)(We, {
								gap: "8px",
								children: Object(r.jsxs)(Fn, {
									marginTop: "10px",
									children: [
										Object(r.jsx)(s.c, {
											style: { width: "68%" },
											as: y.b,
											to: "/migrate/v1/".concat(t.token.address),
											children: "Migrate",
										}),
										Object(r.jsx)(s.c, {
											variant: "secondary",
											style: { width: "28%" },
											as: y.b,
											to: "/remove/v1/".concat(t.token.address),
											children: "Remove",
										}),
									],
								}),
							}),
						],
					}),
				});
			});
			function hl() {
				var e,
					n = Object(a.useContext)(l.ThemeContext),
					t = Se(),
					i = t.account,
					c = t.chainId,
					o = Object(a.useState)(""),
					s = Object(h.a)(o, 2),
					u = s[0],
					d = s[1],
					b = Object(a.useCallback)(
						function (e) {
							return d(e.target.value);
						},
						[d]
					),
					p = ui(u),
					f = ot(Jr(), null !== p && void 0 !== p ? p : void 0),
					j = ci(),
					m = _a();
				Object(a.useEffect)(
					function () {
						!p || f || j[p.address] || m(p);
					},
					[p, f, m, j]
				);
				var y = nu(),
					v = Object(a.useMemo)(
						function () {
							return c
								? Object.keys(y).map(function (e) {
										return new U.l(c, e, 18, "UNI-V1", "Uniswap V1");
								  })
								: [];
						},
						[c, y]
					),
					O = bi(null !== i && void 0 !== i ? i : void 0, v),
					x = Object(h.a)(O, 2),
					g = x[0],
					w = x[1],
					C = v
						.filter(function (e) {
							var n = null === g || void 0 === g ? void 0 : g[e.address];
							return n && U.f.greaterThan(n.raw, U.f.BigInt(0));
						})
						.map(function (e) {
							var n = g[e.address];
							return n
								? Object(r.jsx)(
										ml,
										{ token: y[e.address], V1LiquidityBalance: n },
										e.address
								  )
								: null;
						}),
					k =
						0 ===
							(null === (e = Object.keys(y)) || void 0 === e
								? void 0
								: e.length) || w;
				return Object(r.jsx)(Ju, {
					children: Object(r.jsxs)(We, {
						gap: "16px",
						children: [
							Object(r.jsxs)(Yn, {
								style: {
									alignItems: "center",
									justifyContent: "space-between",
								},
								gap: "8px",
								children: [
									Object(r.jsx)(gn, { to: "/pool" }),
									Object(r.jsx)(In, { children: "Migrate V1 Liquidity" }),
									Object(r.jsx)("div", {
										children: Object(r.jsx)($i, {
											text:
												"Migrate your liquidity tokens from Uniswap V1 to Uniswap V2.",
										}),
									}),
								],
							}),
							Object(r.jsx)(kn, {
								style: { marginBottom: 8, fontWeight: 400 },
								children:
									"For each pool shown below, click migrate to remove your liquidity from Uniswap V1 and deposit it into Uniswap V2.",
							}),
							i
								? k
									? Object(r.jsx)(Wt, {
											padding: "40px",
											children: Object(r.jsx)(kn, {
												color: n.colors.textDisabled,
												textAlign: "center",
												children: Object(r.jsx)(Ss, { children: "Loading" }),
											}),
									  })
									: Object(r.jsxs)(r.Fragment, {
											children: [
												Object(r.jsx)(Yn, {
													children: Object(r.jsx)(gc, {
														value: u,
														onChange: b,
														placeholder:
															"Enter a token address to find liquidity",
													}),
												}),
												(null === C || void 0 === C ? void 0 : C.length) > 0
													? Object(r.jsx)(r.Fragment, { children: C })
													: Object(r.jsx)(jl, {
															message: "No V1 Liquidity found.",
													  }),
											],
									  })
								: Object(r.jsx)(Wt, {
										padding: "40px",
										children: Object(r.jsx)(kn, {
											color: n.colors.textDisabled,
											textAlign: "center",
											children:
												"Connect to a wallet to view your V1 liquidity.",
										}),
								  }),
						],
					}),
				});
			}
			var yl = new U.e(U.f.BigInt(1), U.f.BigInt(1e6)),
				vl = U.f.exponentiate(U.f.BigInt(10), U.f.BigInt(18)),
				Ol = U.f.BigInt(0),
				xl = U.f.BigInt(1),
				gl = new U.e(Ol, xl),
				wl = new U.h(U.f.BigInt(9920), U.f.BigInt(1e4));
			function Cl(e) {
				var n = e.currencyAmount;
				return Object(r.jsx)(r.Fragment, {
					children: n.equalTo(U.f.BigInt(0))
						? "0"
						: n.greaterThan(yl)
						? n.toSignificant(4)
						: "<".concat(yl.toSignificant(1)),
				});
			}
			function kl(e) {
				var n = e.token,
					t = e.liquidityTokenAmount,
					a = e.tokenWorth,
					i = e.ethWorth,
					c = Se().chainId;
				return Object(r.jsxs)(r.Fragment, {
					children: [
						Object(r.jsxs)(Yn, {
							style: { justifyContent: "flex-start", width: "fit-content" },
							children: [
								Object(r.jsx)(oc, { size: "24px", currency: n }),
								Object(r.jsx)("div", {
									style: { marginLeft: ".75rem" },
									children: Object(r.jsxs)(In, {
										children: [
											Object(r.jsx)(Cl, { currencyAmount: t }),
											" ",
											c && n.equals(U.p[c]) ? "WETH" : n.symbol,
											"/ETH",
										],
									}),
								}),
							],
						}),
						Object(r.jsxs)(Fn, {
							my: "1rem",
							children: [
								Object(r.jsxs)(s.v, {
									fontSize: "16px",
									children: [
										"Pooled ",
										c && n.equals(U.p[c]) ? "WETH" : n.symbol,
										":",
									],
								}),
								Object(r.jsxs)(qn, {
									children: [
										Object(r.jsx)(s.v, {
											fontSize: "16px",
											ml: "6px",
											children: a.toSignificant(4),
										}),
										Object(r.jsx)(oc, {
											size: "20px",
											style: { marginLeft: "8px" },
											currency: n,
										}),
									],
								}),
							],
						}),
						Object(r.jsxs)(Fn, {
							mb: "1rem",
							children: [
								Object(r.jsx)(s.v, {
									fontSize: "16px",
									children: "Pooled ETH:",
								}),
								Object(r.jsxs)(qn, {
									children: [
										Object(r.jsx)(s.v, {
											fontSize: "16px",
											ml: "6px",
											children: Object(r.jsx)(Cl, { currencyAmount: i }),
										}),
										Object(r.jsx)(oc, {
											size: "20px",
											style: { marginLeft: "8px" },
											currency: U.b.ETHER,
										}),
									],
								}),
							],
						}),
					],
				});
			}
			function Tl(e) {
				var n,
					t,
					i,
					c,
					o = e.liquidityTokenAmount,
					u = e.token,
					l = Se(),
					d = l.account,
					b = l.chainId,
					p = ss(o.token),
					f =
						null === (n = di([o.token.address])) || void 0 === n
							? void 0
							: n[o.token.address],
					j = fi(o.token.address, u),
					m = Hs(b ? U.p[b] : void 0, u),
					y = Object(h.a)(m, 2),
					v = y[0],
					O = y[1],
					x = v === Ys.NOT_EXISTS,
					g = b && O ? O.reserveOf(u).divide(O.reserveOf(U.p[b])) : void 0,
					w = Object(a.useState)(!1),
					C = Object(h.a)(w, 2),
					k = C[0],
					T = C[1],
					I = Object(a.useState)(null),
					E = Object(h.a)(I, 2),
					N = E[0],
					A = E[1],
					S = p ? new U.h(o.raw, p.raw) : gl,
					R = f
						? U.c.ether(f.multiply(S).multiply(vl).quotient)
						: U.c.ether(Ol),
					B = j ? new U.m(u, S.multiply(j.raw).quotient) : new U.m(u, Ol),
					P = Au(o, Wa),
					_ = Object(h.a)(P, 2),
					M = _[0],
					D = _[1],
					L = j && f ? j.divide(new U.e(f.raw, vl)) : null,
					F = L && g ? L.divide(g).multiply("100").subtract("100") : void 0,
					z = (null === F || void 0 === F ? void 0 : F.lessThan(Ol))
						? null === F || void 0 === F
							? void 0
							: F.multiply("-1")
						: F,
					Y =
						g && B
							? B.divide(g).multiply(vl).multiply(wl).quotient
							: null === R || void 0 === R
							? void 0
							: R.numerator,
					q =
						g && R
							? R.multiply(g)
									.multiply(
										U.f.exponentiate(U.f.BigInt(10), U.f.BigInt(u.decimals))
									)
									.multiply(wl).quotient
							: null === B || void 0 === B
							? void 0
							: B.numerator,
					V = hu(),
					H = vu(null !== N && void 0 !== N ? N : void 0),
					W = $a(Wa, Ha, !0),
					K = Object(a.useCallback)(
						function () {
							q &&
								Y &&
								W &&
								(T(!0),
								W.migrate(
									u.address,
									q.toString(),
									Y.toString(),
									d,
									Math.floor(new Date().getTime() / 1e3) + xe
								)
									.then(function (e) {
										V(e, {
											summary: "Migrate ".concat(u.symbol, " liquidity to V2"),
										}),
											A(e.hash);
									})
									.catch(function () {
										T(!1);
									}));
						},
						[q, Y, W, u, d, V]
					),
					G = !!o && o.equalTo(Ol),
					Q = !!z && !z.lessThan(U.f.BigInt(5)),
					J = !!N && G;
				return Object(r.jsxs)(We, {
					gap: "20px",
					children: [
						Object(r.jsxs)(kn, {
							my: 9,
							style: { fontWeight: 400 },
							children: [
								"This tool will safely migrate your V1 liquidity to V2 with minimal price risk. The process is completely trustless thanks to the",
								" ",
								b &&
									Object(r.jsx)(yn, {
										href: nt(b, Wa, "address"),
										children: Object(r.jsx)(En, {
											display: "inline",
											children: "Uniswap migration contract\u2197",
										}),
									}),
								".",
							],
						}),
						!x && Q
							? Object(r.jsxs)(Gt, {
									children: [
										Object(r.jsxs)(kn, {
											style: { marginBottom: 8, fontWeight: 400 },
											children: [
												"It",
												"'",
												"s best to deposit liquidity into Uniswap V2 at a price you believe is correct. If the V2 price seems incorrect, you can either make a swap to move the price or wait for someone else to do so.",
											],
										}),
										Object(r.jsxs)(We, {
											gap: "8px",
											children: [
												Object(r.jsxs)(Fn, {
													children: [
														Object(r.jsx)(kn, { children: "V1 Price:" }),
														Object(r.jsxs)(Cn, {
															children: [
																null === L || void 0 === L
																	? void 0
																	: L.toSignificant(6),
																" ",
																u.symbol,
																"/ETH",
															],
														}),
													],
												}),
												Object(r.jsxs)(Fn, {
													children: [
														Object(r.jsx)("div", {}),
														Object(r.jsxs)(Cn, {
															children: [
																null === L ||
																void 0 === L ||
																null === (t = L.invert()) ||
																void 0 === t
																	? void 0
																	: t.toSignificant(6),
																" ETH/",
																u.symbol,
															],
														}),
													],
												}),
												Object(r.jsxs)(Fn, {
													children: [
														Object(r.jsx)(kn, { children: "V2 Price:" }),
														Object(r.jsxs)(Cn, {
															children: [
																null === g || void 0 === g
																	? void 0
																	: g.toSignificant(6),
																" ",
																u.symbol,
																"/ETH",
															],
														}),
													],
												}),
												Object(r.jsxs)(Fn, {
													children: [
														Object(r.jsx)("div", {}),
														Object(r.jsxs)(Cn, {
															children: [
																null === g ||
																void 0 === g ||
																null === (i = g.invert()) ||
																void 0 === i
																	? void 0
																	: i.toSignificant(6),
																" ETH/",
																u.symbol,
															],
														}),
													],
												}),
												Object(r.jsxs)(Fn, {
													children: [
														Object(r.jsx)(kn, {
															color: "inherit",
															children: "Price Difference:",
														}),
														Object(r.jsxs)(Cn, {
															color: "inherit",
															children: [
																null === z || void 0 === z
																	? void 0
																	: z.toSignificant(4),
																"%",
															],
														}),
													],
												}),
											],
										}),
									],
							  })
							: null,
						x &&
							Object(r.jsxs)(Qt, {
								children: [
									Object(r.jsx)(kn, {
										style: { marginBottom: 8, fontWeight: 400 },
										children:
											"You are the first liquidity provider for this pair on Uniswap V2. Your liquidity will be migrated at the current V1 price. Your transaction cost also includes the gas to create the pool.",
									}),
									Object(r.jsxs)(We, {
										gap: "8px",
										children: [
											Object(r.jsxs)(Fn, {
												children: [
													Object(r.jsx)(kn, { children: "V1 Price:" }),
													Object(r.jsxs)(Cn, {
														children: [
															null === L || void 0 === L
																? void 0
																: L.toSignificant(6),
															" ",
															u.symbol,
															"/ETH",
														],
													}),
												],
											}),
											Object(r.jsxs)(Fn, {
												children: [
													Object(r.jsx)("div", {}),
													Object(r.jsxs)(Cn, {
														children: [
															null === L ||
															void 0 === L ||
															null === (c = L.invert()) ||
															void 0 === c
																? void 0
																: c.toSignificant(6),
															" ETH/",
															u.symbol,
														],
													}),
												],
											}),
										],
									}),
								],
							}),
						Object(r.jsxs)(Wt, {
							children: [
								Object(r.jsx)(kl, {
									token: u,
									liquidityTokenAmount: o,
									tokenWorth: B,
									ethWorth: R,
								}),
								Object(r.jsxs)("div", {
									style: { display: "flex", marginTop: "1rem" },
									children: [
										Object(r.jsx)(We, {
											gap: "12px",
											style: { flex: "1", marginRight: 12 },
											children: Object(r.jsx)(s.c, {
												variant: M === xu.APPROVED ? "success" : "primary",
												disabled: M !== xu.NOT_APPROVED,
												onClick: D,
												children:
													M === xu.PENDING
														? Object(r.jsx)(Ss, { children: "Approving" })
														: M === xu.APPROVED
														? "Approved"
														: "Approve",
											}),
										}),
										Object(r.jsx)(We, {
											gap: "12px",
											style: { flex: "1" },
											children: Object(r.jsx)(s.c, {
												variant: J ? "success" : "primary",
												disabled: J || G || H || M !== xu.APPROVED || k,
												onClick: K,
												children: J
													? "Success"
													: H
													? Object(r.jsx)(Ss, { children: "Migrating" })
													: "Migrate",
											}),
										}),
									],
								}),
							],
						}),
						Object(r.jsx)(Nn, {
							style: { textAlign: "center" },
							children: "Your Uniswap V1 "
								.concat(u.symbol, "/ETH liquidity will become Uniswap V2 ")
								.concat(u.symbol, "/ETH liquidity."),
						}),
					],
				});
			}
			function Il(e) {
				var n,
					t,
					i = e.history,
					c = e.match.params.address,
					o = $n(c),
					u = Se(),
					l = u.chainId,
					d = u.account,
					b =
						null === (n = ma(ni(o || void 0), "tokenAddress", void 0, ua)) ||
						void 0 === n ||
						null === (t = n.result) ||
						void 0 === t
							? void 0
							: t[0],
					p = ui(b),
					f = fi(
						null !== d && void 0 !== d ? d : void 0,
						Object(a.useMemo)(
							function () {
								return o && l && p
									? new U.l(l, o, 18, "UNI-V1-".concat(p.symbol), "Uniswap V1")
									: void 0;
							},
							[l, o, p]
						)
					);
				return o && b !== Jn.a
					? Object(r.jsx)(Ju, {
							children: Object(r.jsxs)(We, {
								gap: "16px",
								children: [
									Object(r.jsxs)(Yn, {
										style: {
											alignItems: "center",
											justifyContent: "space-between",
										},
										gap: "8px",
										children: [
											Object(r.jsx)(gn, { to: "/migrate/v1" }),
											Object(r.jsx)(In, { children: "Migrate V1 Liquidity" }),
											Object(r.jsx)("div", {
												children: Object(r.jsx)($i, {
													text:
														"Migrate your liquidity tokens from Uniswap V1 to Uniswap V2.",
												}),
											}),
										],
									}),
									d
										? o &&
										  l &&
										  (null === p || void 0 === p ? void 0 : p.equals(U.p[l]))
											? Object(r.jsxs)(r.Fragment, {
													children: [
														Object(r.jsx)(kn, {
															my: 9,
															style: { fontWeight: 400 },
															children:
																"Because Uniswap V2 uses WETH under the hood, your Uniswap V1 WETH/ETH liquidity cannot be migrated. You may want to remove your liquidity instead.",
														}),
														Object(r.jsx)(s.c, {
															onClick: function () {
																i.push("/remove/v1/".concat(o));
															},
															children: "Remove",
														}),
													],
											  })
											: f && p
											? Object(r.jsx)(Tl, { liquidityTokenAmount: f, token: p })
											: Object(r.jsx)(jl, { message: "Loading..." })
										: Object(r.jsx)(Tn, {
												children: "You must connect an account.",
										  }),
								],
							}),
					  })
					: (console.error("Invalid address in path", c),
					  Object(r.jsx)(v.a, { to: "/migrate/v1" }));
			}
			var El = U.f.exponentiate(U.f.BigInt(10), U.f.BigInt(18)),
				Nl = U.f.BigInt(0),
				Al = U.f.BigInt(1),
				Sl = new U.e(Nl, Al);
			function Rl(e) {
				var n,
					t = e.exchangeContract,
					i = e.liquidityTokenAmount,
					c = e.token,
					o = Se().chainId,
					u = ss(i.token),
					l =
						null === (n = di([i.token.address])) || void 0 === n
							? void 0
							: n[i.token.address],
					d = fi(i.token.address, c),
					b = Object(a.useState)(!1),
					p = Object(h.a)(b, 2),
					f = p[0],
					j = p[1],
					m = Object(a.useState)(null),
					y = Object(h.a)(m, 2),
					v = y[0],
					O = y[1],
					x = u ? new U.h(i.raw, u.raw) : Sl,
					g = l
						? U.c.ether(l.multiply(x).multiply(El).quotient)
						: U.c.ether(Nl),
					w = d ? new U.m(c, x.multiply(d.raw).quotient) : new U.m(c, Nl),
					C = hu(),
					k = vu(null !== v && void 0 !== v ? v : void 0),
					T = Object(a.useCallback)(
						function () {
							i &&
								(j(!0),
								t
									.removeLiquidity(
										i.raw.toString(),
										1,
										1,
										Math.floor(new Date().getTime() / 1e3) + xe
									)
									.then(function (e) {
										C(e, {
											summary: "Remove ".concat(
												o && c.equals(U.p[o]) ? "WETH" : c.symbol,
												"/ETH V1 liquidity"
											),
										}),
											O(e.hash);
									})
									.catch(function (e) {
										console.error(e), j(!1);
									}));
						},
						[t, i, c, o, C]
					),
					I = !!i && i.equalTo(Nl),
					E = !!v && I;
				return Object(r.jsxs)(We, {
					gap: "20px",
					children: [
						Object(r.jsx)(kn, {
							my: 9,
							style: { fontWeight: 400 },
							children:
								"This tool will remove your V1 liquidity and send the underlying assets to your wallet.",
						}),
						Object(r.jsxs)(Wt, {
							children: [
								Object(r.jsx)(kl, {
									token: c,
									liquidityTokenAmount: i,
									tokenWorth: w,
									ethWorth: g,
								}),
								Object(r.jsx)("div", {
									style: { display: "flex", marginTop: "1rem" },
									children: Object(r.jsx)(s.c, {
										variant: E ? "success" : "primary",
										disabled: E || I || k || f,
										onClick: T,
										children: E
											? "Success"
											: k
											? Object(r.jsx)(Ss, { children: "Removing" })
											: "Remove",
									}),
								}),
							],
						}),
						Object(r.jsx)(Nn, {
							style: { textAlign: "center" },
							children: "Your Uniswap V1 ".concat(
								o && c.equals(U.p[o]) ? "WETH" : c.symbol,
								"/ETH liquidity will be redeemed for underlying assets."
							),
						}),
					],
				});
			}
			function Ul(e) {
				var n,
					t,
					i = e.match.params.address,
					c = $n(i),
					o = Se(),
					s = o.chainId,
					u = o.account,
					l = ni(c || void 0, !0),
					d =
						null === (n = ma(l, "tokenAddress", void 0, ua)) ||
						void 0 === n ||
						null === (t = n.result) ||
						void 0 === t
							? void 0
							: t[0],
					b = ui(d),
					p = fi(
						null !== u && void 0 !== u ? u : void 0,
						Object(a.useMemo)(
							function () {
								return c && s && b
									? new U.l(s, c, 18, "UNI-V1-".concat(b.symbol), "Uniswap V1")
									: void 0;
							},
							[s, c, b]
						)
					);
				return c && d !== Jn.a
					? Object(r.jsx)(Ju, {
							children: Object(r.jsxs)(We, {
								gap: "16px",
								children: [
									Object(r.jsxs)(Yn, {
										style: {
											alignItems: "center",
											justifyContent: "space-between",
										},
										gap: "8px",
										children: [
											Object(r.jsx)(gn, { to: "/migrate/v1" }),
											Object(r.jsx)(In, { children: "Remove V1 Liquidity" }),
											Object(r.jsx)("div", {
												children: Object(r.jsx)($i, {
													text: "Remove your Uniswap V1 liquidity tokens.",
												}),
											}),
										],
									}),
									u
										? p && b && l
											? Object(r.jsx)(Rl, {
													exchangeContract: l,
													liquidityTokenAmount: p,
													token: b,
											  })
											: Object(r.jsx)(jl, { message: "Loading..." })
										: Object(r.jsx)(Tn, {
												children: "You must connect an account.",
										  }),
								],
							}),
					  })
					: (console.error("Invalid address in path", i),
					  Object(r.jsx)(v.a, { to: "/migrate/v1" }));
			}
			function Bl() {
				var e = Object(u.a)([
					"\n  align-items: center;\n  display: flex;\n  margin-bottom: 8px;\n",
				]);
				return (
					(Bl = function () {
						return e;
					}),
					e
				);
			}
			function Pl() {
				var e = Object(u.a)([
					"\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n\n  ",
					":first-child {\n    padding-left: 0;\n  }\n\n  ",
					":last-child {\n    padding-right: 0;\n  }\n\n  ",
					" {\n    flex-direction: row;\n  }\n",
				]);
				return (
					(Pl = function () {
						return e;
					}),
					e
				);
			}
			function _l() {
				var e = Object(u.a)(["\n  padding: 0 4px;\n"]);
				return (
					(_l = function () {
						return e;
					}),
					e
				);
			}
			function Ml() {
				var e = Object(u.a)(["\n  margin-bottom: 16px;\n"]);
				return (
					(Ml = function () {
						return e;
					}),
					e
				);
			}
			var Dl = l.default.div(Ml()),
				Ll = l.default.div(_l()),
				Fl = l.default.div(Pl(), Ll, Ll, function (e) {
					return e.theme.mediaQueries.sm;
				}),
				zl = l.default.div(Bl()),
				Yl = [
					{ label: "0.1%", value: 0.1 },
					{ label: "0.5%", value: 0.5 },
					{ label: "1%", value: 1 },
				],
				ql = function () {
					var e = Ba(),
						n = Object(h.a)(e, 2),
						t = n[0],
						i = n[1],
						c = Object(a.useState)(t / 100),
						o = Object(h.a)(c, 2),
						u = o[0],
						l = o[1],
						d = Object(a.useState)(null),
						b = Object(h.a)(d, 2),
						p = b[0],
						f = b[1];
					return (
						Object(a.useEffect)(
							function () {
								try {
									var e = 100 * u;
									!Number.isNaN(e) && e > 0 && e < 5e3
										? (i(e), f(null))
										: f("Enter a valid slippage percentage");
								} catch (n) {
									f("Enter a valid slippage percentage");
								}
							},
							[u, f, i]
						),
						Object(a.useEffect)(
							function () {
								t < 50
									? f("Your transaction may fail")
									: t > 500 && f("Your transaction may be frontrun");
							},
							[t, f]
						),
						Object(r.jsxs)(Dl, {
							children: [
								Object(r.jsxs)(zl, {
									children: [
										Object(r.jsx)(s.v, {
											style: { fontWeight: 600 },
											children: Object(r.jsx)(Br, {
												translationId: 88,
												children: "Slippage tolerance",
											}),
										}),
										Object(r.jsx)($i, {
											text:
												"Your transaction will revert if the price changes unfavorably by more than this percentage.",
										}),
									],
								}),
								Object(r.jsxs)(Fl, {
									children: [
										Object(r.jsx)(s.l, {
											mb: ["8px", 0],
											mr: [0, "8px"],
											children: Yl.map(function (e) {
												var n = e.label,
													t = e.value;
												return Object(r.jsx)(
													Ll,
													{
														children: Object(r.jsx)(s.c, {
															variant: u === t ? "primary" : "tertiary",
															onClick: function () {
																return l(t);
															},
															children: n,
														}),
													},
													t
												);
											}),
										}),
										Object(r.jsxs)(s.l, {
											alignItems: "center",
											children: [
												Object(r.jsx)(Ll, {
													children: Object(r.jsx)(s.o, {
														type: "number",
														scale: "lg",
														step: 0.1,
														min: 0.1,
														placeholder: "5%",
														value: u,
														onChange: function (e) {
															var n = e.target.value;
															l(parseFloat(n));
														},
														isWarning: null !== p,
													}),
												}),
												Object(r.jsx)(Ll, {
													children: Object(r.jsx)(s.v, {
														fontSize: "18px",
														children: "%",
													}),
												}),
											],
										}),
									],
								}),
								p &&
									Object(r.jsx)(s.v, {
										mt: "8px",
										color: "failure",
										children: p,
									}),
							],
						})
					);
				};
			function Vl() {
				var e = Object(u.a)([
					"\n  align-items: center;\n  display: inline-flex;\n\n  & > ",
					" {\n    max-width: 100px;\n  }\n\n  & > ",
					" {\n    font-size: 14px;\n    margin-left: 8px;\n  }\n",
				]);
				return (
					(Vl = function () {
						return e;
					}),
					e
				);
			}
			function Hl() {
				var e = Object(u.a)([
					"\n  align-items: center;\n  display: flex;\n  margin-bottom: 8px;\n",
				]);
				return (
					(Hl = function () {
						return e;
					}),
					e
				);
			}
			function Wl() {
				var e = Object(u.a)(["\n  margin-bottom: 16px;\n"]);
				return (
					(Wl = function () {
						return e;
					}),
					e
				);
			}
			var Kl = l.default.div(Wl()),
				Gl = l.default.div(Hl()),
				Ql = l.default.div(Vl(), s.o, s.v),
				Jl = function () {
					var e = Pa(),
						n = Object(h.a)(e, 2),
						t = n[0],
						i = n[1],
						c = Object(a.useState)(t / 60),
						o = Object(h.a)(c, 2),
						u = o[0],
						l = o[1],
						d = Object(a.useState)(null),
						b = Object(h.a)(d, 2),
						p = b[0],
						f = b[1];
					return (
						Object(a.useEffect)(
							function () {
								try {
									var e = 60 * u;
									!Number.isNaN(e) && e > 0
										? (i(e), f(null))
										: f("Enter a valid deadline");
								} catch (n) {
									f("Enter a valid deadline");
								}
							},
							[u, f, i]
						),
						Object(r.jsxs)(Kl, {
							children: [
								Object(r.jsxs)(Gl, {
									children: [
										Object(r.jsx)(s.v, {
											style: { fontWeight: 600 },
											children: Object(r.jsx)(Br, {
												translationId: 90,
												children: "Transaction deadline",
											}),
										}),
										Object(r.jsx)($i, {
											text:
												"Your transaction will revert if it is pending for more than this long.",
										}),
									],
								}),
								Object(r.jsxs)(Ql, {
									children: [
										Object(r.jsx)(s.o, {
											type: "number",
											step: "1",
											min: "1",
											value: u,
											onChange: function (e) {
												var n = e.target.value;
												l(parseInt(n, 10));
											},
										}),
										Object(r.jsx)(s.v, { children: "Minutes" }),
									],
								}),
								p &&
									Object(r.jsx)(s.v, {
										mt: "8px",
										color: "failure",
										children: p,
									}),
							],
						})
					);
				},
				Xl = function () {
					return null;
				},
				Zl = function (e) {
					var n = e.onDismiss,
						t = void 0 === n ? Xl : n;
					return Object(r.jsxs)(s.r, {
						title: "Settings",
						onDismiss: t,
						children: [Object(r.jsx)(ql, {}), Object(r.jsx)(Jl, {})],
					});
				},
				$l = function () {
					return null;
				},
				ed = function (e, n) {
					return n.addedTime - e.addedTime;
				},
				nd = function (e) {
					var n = e.onDismiss,
						t = void 0 === n ? $l : n,
						i = Se(),
						c = i.account,
						o = i.chainId,
						u = yu(),
						l = Object(a.useMemo)(
							function () {
								return Object.values(u).filter(Ou).sort(ed);
							},
							[u]
						);
					return (
						console.log(l),
						Object(r.jsxs)(s.r, {
							title: "Recent Transactions",
							onDismiss: t,
							children: [
								!c &&
									Object(r.jsxs)(s.l, {
										justifyContent: "center",
										flexDirection: "column",
										alignItems: "center",
										children: [
											Object(r.jsx)(s.v, {
												mb: "8px",
												bold: !0,
												children:
													"Please connect your wallet to view your recent transactions",
											}),
											Object(r.jsx)(s.c, {
												variant: "tertiary",
												size: "sm",
												onClick: t,
												children: "Close",
											}),
										],
									}),
								c &&
									o &&
									0 === l.length &&
									Object(r.jsxs)(s.l, {
										justifyContent: "center",
										flexDirection: "column",
										alignItems: "center",
										children: [
											Object(r.jsx)(s.v, {
												mb: "8px",
												bold: !0,
												children: "No recent transactions",
											}),
											Object(r.jsx)(s.c, {
												variant: "tertiary",
												size: "sm",
												onClick: t,
												children: "Close",
											}),
										],
									}),
								c &&
									o &&
									l.map(function (e) {
										var n = e.hash,
											t = e.summary,
											a = (function (e) {
												var n = e.hash,
													t = e.receipt;
												return n
													? n &&
													  1 ===
															(null === t || void 0 === t ? void 0 : t.status)
														? {
																icon: Object(r.jsx)(s.h, { color: "success" }),
																color: "success",
														  }
														: {
																icon: Object(r.jsx)(s.k, { color: "failure" }),
																color: "failure",
														  }
													: { icon: Object(r.jsx)(St, {}), color: "text" };
											})(e),
											i = a.icon,
											c = a.color;
										return Object(r.jsx)(r.Fragment, {
											children: Object(r.jsxs)(
												s.l,
												{
													alignItems: "center",
													justifyContent: "space-between",
													mb: "4px",
													children: [
														Object(r.jsx)(s.p, {
															href: nt(o, n, "transaction"),
															color: c,
															children: null !== t && void 0 !== t ? t : n,
														}),
														i,
													],
												},
												n
											),
										});
									}),
							],
						})
					);
				};
			function td() {
				var e = Object(u.a)(["\n  flex: 1;\n"]);
				return (
					(td = function () {
						return e;
					}),
					e
				);
			}
			function rd() {
				var e = Object(u.a)([
					"\n  border-bottom: 1px solid ",
					";\n  padding: 24px;\n",
				]);
				return (
					(rd = function () {
						return e;
					}),
					e
				);
			}
			var ad,
				id = function () {
					return Object(r.jsx)("svg", {
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: Object(r.jsx)("path", {
							d:
								"M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z",
							fill: "currentColor",
						}),
					});
				},
				cd = function () {
					return Object(r.jsx)("svg", {
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: Object(r.jsx)("path", {
							d:
								"M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z",
							fill: "currentColor",
						}),
					});
				},
				od = l.default.div(rd(), function (e) {
					return e.theme.colors.borderColor;
				}),
				sd = l.default.div(td()),
				ud = function (e) {
					var n = e.title,
						t = e.description,
						a = e.children,
						i = Object(s.y)(Object(r.jsx)(Zl, {})),
						c = Object(h.a)(i, 1)[0],
						o = Object(s.y)(Object(r.jsx)(nd, {})),
						u = Object(h.a)(o, 1)[0];
					return Object(r.jsxs)(od, {
						children: [
							Object(r.jsxs)(s.l, {
								alignItems: "center",
								children: [
									Object(r.jsxs)(sd, {
										children: [
											Object(r.jsx)(s.m, { mb: "8px", children: n }),
											t &&
												Object(r.jsx)(s.v, {
													color: "textSubtle",
													fontSize: "14px",
													children: t,
												}),
										],
									}),
									Object(r.jsx)(s.n, {
										variant: "text",
										onClick: c,
										title: "Settings",
										children: Object(r.jsx)(id, {}),
									}),
									Object(r.jsx)(s.n, {
										variant: "text",
										onClick: u,
										title: "Recent transactions",
										children: Object(r.jsx)(cd, {}),
									}),
								],
							}),
							a && Object(r.jsx)(s.v, { mt: "16px", children: a }),
						],
					});
				};
			function ld() {
				var e = Object(a.useContext)(l.ThemeContext),
					n = Se().account,
					t = (function () {
						var e = Se().chainId,
							n = ci(),
							t = Object(a.useMemo)(
								function () {
									var n;
									return e && null !== (n = ye[e]) && void 0 !== n ? n : [];
								},
								[e]
							),
							r = Object(a.useMemo)(
								function () {
									return e
										? ya()(Object.keys(n), function (t) {
												var r,
													a = n[t];
												return (null !== (r = he[e]) && void 0 !== r ? r : [])
													.map(function (e) {
														return e.address === a.address ? null : [e, a];
													})
													.filter(function (e) {
														return null !== e;
													});
										  })
										: [];
								},
								[n, e]
							),
							i = Object(De.d)(function (e) {
								return e.user.pairs;
							}),
							c = Object(a.useMemo)(
								function () {
									if (!e || !i) return [];
									var n = i[e];
									return n
										? Object.keys(n).map(function (e) {
												return [Ra(n[e].token0), Ra(n[e].token1)];
										  })
										: [];
								},
								[i, e]
							),
							o = Object(a.useMemo)(
								function () {
									return c.concat(r).concat(t);
								},
								[r, t, c]
							);
						return Object(a.useMemo)(
							function () {
								var e = o.reduce(function (e, n) {
									var t = Object(h.a)(n, 2),
										r = t[0],
										a = t[1],
										i = r.sortsBefore(a),
										c = i
											? "".concat(r.address, ":").concat(a.address)
											: "".concat(a.address, ":").concat(r.address);
									return e[c] || (e[c] = i ? [r, a] : [a, r]), e;
								}, {});
								return Object.keys(e).map(function (n) {
									return e[n];
								});
							},
							[o]
						);
					})(),
					i = Object(a.useMemo)(
						function () {
							return t.map(function (e) {
								return { liquidityToken: La(e), tokens: e };
							});
						},
						[t]
					),
					c = bi(
						null !== n && void 0 !== n ? n : void 0,
						Object(a.useMemo)(
							function () {
								return i.map(function (e) {
									return e.liquidityToken;
								});
							},
							[i]
						)
					),
					o = Object(h.a)(c, 2),
					u = o[0],
					d = o[1],
					b = Object(a.useMemo)(
						function () {
							return i.filter(function (e) {
								var n,
									t = e.liquidityToken;
								return null === (n = u[t.address]) || void 0 === n
									? void 0
									: n.greaterThan("0");
							});
						},
						[i, u]
					),
					p = Vs(
						b.map(function (e) {
							return e.tokens;
						})
					),
					f =
						d ||
						(null === p || void 0 === p ? void 0 : p.length) < b.length ||
						(null === p || void 0 === p
							? void 0
							: p.some(function (e) {
									return !e;
							  })),
					j = p
						.map(function (e) {
							return Object(h.a)(e, 2)[1];
						})
						.filter(function (e) {
							return Boolean(e);
						}),
					m = (function () {
						var e = Se(),
							n = e.account,
							t = e.chainId,
							r = nu(),
							i = pi(
								null !== n && void 0 !== n ? n : void 0,
								Object(a.useMemo)(
									function () {
										return t
											? Object.keys(r).map(function (e) {
													return new U.l(t, e, 18, "UNI-V1", "Uniswap V1");
											  })
											: [];
									},
									[t, r]
								)
							);
						return Object(a.useMemo)(
							function () {
								return Object.keys(i).some(function (e) {
									var n,
										t = null === (n = i[e]) || void 0 === n ? void 0 : n.raw;
									return t && U.f.greaterThan(t, U.f.BigInt(0));
								});
							},
							[i]
						);
					})();
				return Object(r.jsxs)(r.Fragment, {
					children: [
						Object(r.jsx)(Dr, { activeIndex: 1 }),
						Object(r.jsxs)(Xu, {
							children: [
								Object(r.jsx)(ud, {
									title: "Liquidity",
									description: "Add liquidity to receive LP tokens",
									children: Object(r.jsx)(s.c, {
										id: "join-pool-button",
										as: y.b,
										to: "/add/ETH",
										children: Object(r.jsx)(Br, {
											translationId: 100,
											children: "Add Liquidity",
										}),
									}),
								}),
								Object(r.jsx)(We, {
									gap: "lg",
									justify: "center",
									children: Object(r.jsx)(s.g, {
										children: Object(r.jsxs)(We, {
											gap: "12px",
											style: { width: "100%" },
											children: [
												Object(r.jsxs)(Fn, {
													padding: "0 8px",
													children: [
														Object(r.jsx)(s.v, {
															color: e.colors.text,
															children: Object(r.jsx)(Br, {
																translationId: 102,
																children: "Your Liquidity",
															}),
														}),
														Object(r.jsx)($i, {
															text: Rr(
																130,
																"When you add liquidity, you are given pool tokens that represent your share. If you don\u2019t see a pool you joined in this list, try importing a pool below."
															),
														}),
													],
												}),
												n
													? f
														? Object(r.jsx)(Wt, {
																padding: "40px",
																children: Object(r.jsx)(kn, {
																	color: e.colors.textDisabled,
																	textAlign: "center",
																	children: Object(r.jsx)(Ss, {
																		children: "Loading",
																	}),
																}),
														  })
														: (null === j || void 0 === j ? void 0 : j.length) >
														  0
														? Object(r.jsx)(r.Fragment, {
																children: j.map(function (e) {
																	return Object(r.jsx)(
																		zs,
																		{ pair: e },
																		e.liquidityToken.address
																	);
																}),
														  })
														: Object(r.jsx)(Wt, {
																padding: "40px",
																children: Object(r.jsx)(kn, {
																	color: e.colors.textDisabled,
																	textAlign: "center",
																	children: Object(r.jsx)(Br, {
																		translationId: 104,
																		children: "No liquidity found.",
																	}),
																}),
														  })
													: Object(r.jsx)(Wt, {
															padding: "40px",
															children: Object(r.jsx)(kn, {
																color: e.colors.textDisabled,
																textAlign: "center",
																children:
																	"Connect to a wallet to view your liquidity.",
															}),
													  }),
												Object(r.jsxs)("div", {
													children: [
														Object(r.jsxs)(s.v, {
															fontSize: "14px",
															style: { padding: ".5rem 0 .5rem 0" },
															children: [
																m
																	? "Uniswap V1 liquidity found!"
																	: Rr(106, "Don't see a pool you joined?"),
																" ",
																Object(r.jsx)(mn, {
																	id: "import-pool-link",
																	to: m ? "/migrate/v1" : "/find",
																	children: m
																		? "Migrate now."
																		: Rr(108, "Import it."),
																}),
															],
														}),
														Object(r.jsx)(s.v, {
															fontSize: "14px",
															style: { padding: ".5rem 0 .5rem 0" },
															children:
																"Or, if you staked your FLIP tokens in a farm, unstake them to see them here.",
														}),
													],
												}),
											],
										}),
									}),
								}),
							],
						}),
					],
				});
			}
			function dd() {
				var e,
					n = Se().account,
					t = Object(a.useState)(!1),
					i = Object(h.a)(t, 2),
					c = i[0],
					o = i[1],
					u = Object(a.useState)(ad.TOKEN1),
					l = Object(h.a)(u, 2),
					d = l[0],
					b = l[1],
					p = Object(a.useState)(U.d),
					f = Object(h.a)(p, 2),
					j = f[0],
					m = f[1],
					y = Object(a.useState)(null),
					v = Object(h.a)(y, 2),
					O = v[0],
					x = v[1],
					g = Hs(
						null !== j && void 0 !== j ? j : void 0,
						null !== O && void 0 !== O ? O : void 0
					),
					w = Object(h.a)(g, 2),
					C = w[0],
					k = w[1],
					T = (function () {
						var e = Object(De.c)();
						return Object(a.useCallback)(
							function (n) {
								e(Ta({ serializedPair: Da(n) }));
							},
							[e]
						);
					})();
				Object(a.useEffect)(
					function () {
						k && T(k);
					},
					[k, T]
				);
				var I =
						C === Ys.NOT_EXISTS ||
						Boolean(
							C === Ys.EXISTS &&
								k &&
								U.f.equal(k.reserve0.raw, U.f.BigInt(0)) &&
								U.f.equal(k.reserve1.raw, U.f.BigInt(0))
						),
					E = fi(
						null !== n && void 0 !== n ? n : void 0,
						null === k || void 0 === k ? void 0 : k.liquidityToken
					),
					N = Boolean(E && U.f.greaterThan(E.raw, U.f.BigInt(0))),
					A = Object(a.useCallback)(
						function (e) {
							d === ad.TOKEN0 ? m(e) : x(e);
						},
						[d]
					),
					S = Object(a.useCallback)(
						function () {
							o(!1);
						},
						[o]
					),
					R = Object(r.jsx)(Wt, {
						padding: "45px 10px",
						children: Object(r.jsx)(s.v, {
							style: { textAlign: "center" },
							children: n
								? "Select a token to find your liquidity."
								: "Connect to a wallet to find pools",
						}),
					});
				return Object(r.jsxs)(r.Fragment, {
					children: [
						Object(r.jsx)(Dr, { activeIndex: 1 }),
						Object(r.jsxs)(Xu, {
							children: [
								Object(r.jsx)(as, {}),
								Object(r.jsxs)(s.g, {
									children: [
										Object(r.jsxs)(We, {
											gap: "md",
											children: [
												Object(r.jsx)(s.c, {
													onClick: function () {
														o(!0), b(ad.TOKEN0);
													},
													startIcon: j
														? Object(r.jsx)(oc, {
																currency: j,
																style: { marginRight: ".5rem" },
														  })
														: null,
													endIcon: Object(r.jsx)(s.i, {
														width: "24px",
														color: "white",
													}),
													fullWidth: !0,
													children: j
														? j.symbol
														: Object(r.jsx)(Br, {
																translationId: 82,
																children: "Select a Token",
														  }),
												}),
												Object(r.jsx)(He, {
													children: Object(r.jsx)(s.a, { color: "textSubtle" }),
												}),
												Object(r.jsx)(s.c, {
													onClick: function () {
														o(!0), b(ad.TOKEN1);
													},
													startIcon: O
														? Object(r.jsx)(oc, {
																currency: O,
																style: { marginRight: ".5rem" },
														  })
														: null,
													endIcon: Object(r.jsx)(s.i, {
														width: "24px",
														color: "white",
													}),
													fullWidth: !0,
													children: O
														? O.symbol
														: Object(r.jsx)(Br, {
																translationId: 82,
																children: "Select a Token",
														  }),
												}),
												N &&
													Object(r.jsx)(He, {
														style: {
															justifyItems: "center",
															backgroundColor: "",
															padding: "12px 0px",
															borderRadius: "12px",
														},
														children: Object(r.jsx)(s.v, {
															style: { textAlign: "center" },
															children: "Pool Found!",
														}),
													}),
												j && O
													? C === Ys.EXISTS
														? N && k
															? Object(r.jsx)(Fs, { pair: k })
															: Object(r.jsx)(Wt, {
																	padding: "45px 10px",
																	children: Object(r.jsxs)(We, {
																		gap: "sm",
																		justify: "center",
																		children: [
																			Object(r.jsx)(s.v, {
																				style: { textAlign: "center" },
																				children:
																					"You don\u2019t have liquidity in this pool yet.",
																			}),
																			Object(r.jsx)(mn, {
																				to: "/add/"
																					.concat(us(j), "/")
																					.concat(us(O)),
																				children: Object(r.jsx)(s.v, {
																					style: { textAlign: "center" },
																					children: Object(r.jsx)(Br, {
																						translationId: 100,
																						children: "Add Liquidity",
																					}),
																				}),
																			}),
																		],
																	}),
															  })
														: I
														? Object(r.jsx)(Wt, {
																padding: "45px 10px",
																children: Object(r.jsxs)(We, {
																	gap: "sm",
																	justify: "center",
																	children: [
																		Object(r.jsx)(s.v, {
																			style: { textAlign: "center" },
																			children: "No pool found.",
																		}),
																		Object(r.jsx)(mn, {
																			to: "/add/"
																				.concat(us(j), "/")
																				.concat(us(O)),
																			children: "Create pool.",
																		}),
																	],
																}),
														  })
														: C === Ys.INVALID
														? Object(r.jsx)(Wt, {
																padding: "45px 10px",
																children: Object(r.jsx)(We, {
																	gap: "sm",
																	justify: "center",
																	children: Object(r.jsx)(s.v, {
																		style: { textAlign: "center" },
																		children: Object(r.jsx)(Br, {
																			translationId: 136,
																			children: "Invalid pair.",
																		}),
																	}),
																}),
														  })
														: C === Ys.LOADING
														? Object(r.jsx)(Wt, {
																padding: "45px 10px",
																children: Object(r.jsx)(We, {
																	gap: "sm",
																	justify: "center",
																	children: Object(r.jsxs)(s.v, {
																		style: { textAlign: "center" },
																		children: [
																			"Loading",
																			Object(r.jsx)(al, {}),
																		],
																	}),
																}),
														  })
														: null
													: R,
											],
										}),
										Object(r.jsx)(Co, {
											isOpen: c,
											onCurrencySelect: A,
											onDismiss: S,
											showCommonBases: !0,
											selectedCurrency:
												null !== (e = d === ad.TOKEN0 ? O : j) && void 0 !== e
													? e
													: void 0,
										}),
									],
								}),
							],
						}),
					],
				});
			}
			!(function (e) {
				(e[(e.TOKEN0 = 0)] = "TOKEN0"), (e[(e.TOKEN1 = 1)] = "TOKEN1");
			})(ad || (ad = {}));
			var bd = t(3),
				pd = t(501),
				fd = t(502);
			function jd() {
				var e = Object(u.a)([
					"\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  width: 100%; /* Specific width is required for Firefox. */\n  background: transparent; /* Otherwise white in Chrome */\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: ",
					"px;\n    width: ",
					"px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    transform: translateY(-50%);\n    color: ",
					";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-moz-range-thumb {\n    height: ",
					"px;\n    width: ",
					"px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    color: ",
					";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-ms-thumb {\n    height: ",
					"px;\n    width: ",
					"px;\n    background-color: #565a69;\n    border-radius: 100%;\n    color: ",
					";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    background: linear-gradient(\n      90deg,\n      ",
					",\n      ",
					"\n    );\n    height: 2px;\n  }\n\n  &::-moz-range-track {\n    background: linear-gradient(\n      90deg,\n      ",
					",\n      ",
					"\n    );\n    height: 2px;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    border-color: transparent;\n    color: transparent;\n\n    background: ",
					";\n    height: 2px;\n  }\n  &::-ms-fill-lower {\n    background: ",
					";\n  }\n  &::-ms-fill-upper {\n    background: ",
					";\n  }\n",
				]);
				return (
					(jd = function () {
						return e;
					}),
					e
				);
			}
			var md,
				hd = l.default.input(
					jd(),
					function (e) {
						return e.size;
					},
					function (e) {
						return e.size;
					},
					function (e) {
						return e.theme.colors.invertedContrast;
					},
					function (e) {
						return e.size;
					},
					function (e) {
						return e.size;
					},
					function (e) {
						return e.theme.colors.invertedContrast;
					},
					function (e) {
						return e.size;
					},
					function (e) {
						return e.size;
					},
					function (e) {
						return e.theme.colors.invertedContrast;
					},
					function (e) {
						return e.theme.colors.primaryDark;
					},
					function (e) {
						return e.theme.colors.tertiary;
					},
					function (e) {
						return e.theme.colors.primaryDark;
					},
					function (e) {
						return e.theme.colors.tertiary;
					},
					function (e) {
						return e.theme.colors.primaryDark;
					},
					function (e) {
						return e.theme.colors.primaryDark;
					},
					function (e) {
						return e.theme.colors.tertiary;
					}
				);
			function yd(e) {
				var n = e.value,
					t = e.onChange,
					i = e.min,
					c = void 0 === i ? 0 : i,
					o = e.step,
					s = void 0 === o ? 1 : o,
					u = e.max,
					l = void 0 === u ? 100 : u,
					d = e.size,
					b = void 0 === d ? 28 : d,
					p = Object(a.useCallback)(
						function (e) {
							t(parseInt(e.target.value));
						},
						[t]
					);
				return Object(r.jsx)(hd, {
					size: b,
					type: "range",
					value: n,
					style: {
						width: "90%",
						marginLeft: 15,
						marginRight: 15,
						padding: "15px 0",
					},
					onChange: p,
					"aria-labelledby": "input slider",
					step: s,
					min: c,
					max: l,
				});
			}
			!(function (e) {
				(e.LIQUIDITY_PERCENT = "LIQUIDITY_PERCENT"),
					(e.LIQUIDITY = "LIQUIDITY"),
					(e.CURRENCY_A = "CURRENCY_A"),
					(e.CURRENCY_B = "CURRENCY_B");
			})(md || (md = {}));
			var vd = Object(Re.b)("burn/typeInputBurn");
			function Od() {
				return Object(De.d)(function (e) {
					return e.burn;
				});
			}
			function xd() {
				var e = Object(u.a)([
					"\n  padding-left: 24px;\n  padding-right: 24px;\n",
				]);
				return (
					(xd = function () {
						return e;
					}),
					e
				);
			}
			function gd() {
				var e = Object(u.a)([
					"\n  border: 1px solid ",
					";\n  border-radius: 16px;\n  padding: 24px;\n",
				]);
				return (
					(gd = function () {
						return e;
					}),
					e
				);
			}
			var wd = l.default.div(gd(), function (e) {
					return e.theme.colors.borderColor;
				}),
				Cd = l.default.div(xd());
			function kd(e) {
				var n,
					t,
					i,
					c,
					o,
					u,
					d,
					b,
					p,
					f,
					y,
					v,
					O,
					x,
					g = e.history,
					C = e.match.params,
					k = C.currencyIdA,
					T = C.currencyIdB,
					I = null !== (n = li(k)) && void 0 !== n ? n : void 0,
					E = null !== (t = li(T)) && void 0 !== t ? t : void 0,
					N = Se(),
					A = N.account,
					S = N.chainId,
					R = N.library,
					B = Object(a.useMemo)(
						function () {
							return [ls(I, S), ls(E, S)];
						},
						[I, E, S]
					),
					P = Object(h.a)(B, 2),
					_ = P[0],
					M = P[1],
					D = Object(a.useContext)(l.ThemeContext),
					L = Od(),
					F = L.independentField,
					z = L.typedValue,
					Y = (function (e, n) {
						var t,
							r,
							a,
							i,
							c,
							o = Se(),
							s = o.account,
							u = o.chainId,
							l = Od(),
							d = l.independentField,
							b = l.typedValue,
							p = Hs(e, n),
							f = Object(h.a)(p, 2)[1],
							j = pi(null !== s && void 0 !== s ? s : void 0, [
								null === f || void 0 === f ? void 0 : f.liquidityToken,
							]),
							m =
								null === j || void 0 === j
									? void 0
									: j[
											null !==
												(t =
													null === f ||
													void 0 === f ||
													null === (r = f.liquidityToken) ||
													void 0 === r
														? void 0
														: r.address) && void 0 !== t
												? t
												: ""
									  ],
							y = [ls(e, u), ls(n, u)],
							v = y[0],
							O = y[1],
							x =
								((a = {}),
								Object(w.a)(a, md.CURRENCY_A, v),
								Object(w.a)(a, md.CURRENCY_B, O),
								Object(w.a)(
									a,
									md.LIQUIDITY,
									null === f || void 0 === f ? void 0 : f.liquidityToken
								),
								a),
							g = ss(null === f || void 0 === f ? void 0 : f.liquidityToken),
							C =
								f && g && m && v && U.f.greaterThanOrEqual(g.raw, m.raw)
									? new U.m(v, f.getLiquidityValue(v, g, m, !1).raw)
									: void 0,
							k =
								f && g && m && O && U.f.greaterThanOrEqual(g.raw, m.raw)
									? new U.m(O, f.getLiquidityValue(O, g, m, !1).raw)
									: void 0,
							T =
								((i = {}),
								Object(w.a)(i, md.CURRENCY_A, C),
								Object(w.a)(i, md.CURRENCY_B, k),
								i),
							I = new U.h("0", "100");
						if (d === md.LIQUIDITY_PERCENT) I = new U.h(b, "100");
						else if (d === md.LIQUIDITY) {
							if (null === f || void 0 === f ? void 0 : f.liquidityToken) {
								var E = Du(b, f.liquidityToken);
								E && m && !E.greaterThan(m) && (I = new U.h(E.raw, m.raw));
							}
						} else if (x[d]) {
							var N = Du(b, x[d]),
								A = T[d];
							N && A && !N.greaterThan(A) && (I = new U.h(N.raw, A.raw));
						}
						var S,
							R,
							B =
								((c = {}),
								Object(w.a)(c, md.LIQUIDITY_PERCENT, I),
								Object(w.a)(
									c,
									md.LIQUIDITY,
									m && I && I.greaterThan("0")
										? new U.m(m.token, I.multiply(m.raw).quotient)
										: void 0
								),
								Object(w.a)(
									c,
									md.CURRENCY_A,
									v && I && I.greaterThan("0") && C
										? new U.m(v, I.multiply(C.raw).quotient)
										: void 0
								),
								Object(w.a)(
									c,
									md.CURRENCY_B,
									O && I && I.greaterThan("0") && k
										? new U.m(O, I.multiply(k.raw).quotient)
										: void 0
								),
								c);
						return (
							s || (S = "Connect Wallet"),
							(B[md.LIQUIDITY] && B[md.CURRENCY_A] && B[md.CURRENCY_B]) ||
								(S = null !== (R = S) && void 0 !== R ? R : "Enter an amount"),
							{ pair: f, parsedAmounts: B, error: S }
						);
					})(
						null !== I && void 0 !== I ? I : void 0,
						null !== E && void 0 !== E ? E : void 0
					),
					q = Y.pair,
					V = Y.parsedAmounts,
					H = Y.error,
					W = (function () {
						var e = Object(De.c)();
						return {
							onUserInput: Object(a.useCallback)(
								function (n, t) {
									e(vd({ field: n, typedValue: t }));
								},
								[e]
							),
						};
					})().onUserInput,
					K = !H,
					G = Object(a.useState)(!1),
					Q = Object(h.a)(G, 2),
					J = Q[0],
					X = Q[1],
					Z = Object(a.useState)(!1),
					$ = Object(h.a)(Z, 2),
					ee = $[0],
					ne = $[1],
					te = Object(a.useState)(!1),
					re = Object(h.a)(te, 2),
					ae = re[0],
					ie = re[1],
					ce = Object(a.useState)(""),
					ue = Object(h.a)(ce, 2),
					le = ue[0],
					de = ue[1],
					be = Pa(),
					pe = Object(h.a)(be, 1)[0],
					fe = Ba(),
					je = Object(h.a)(fe, 1)[0],
					me =
						((p = {}),
						Object(w.a)(
							p,
							md.LIQUIDITY_PERCENT,
							V[md.LIQUIDITY_PERCENT].equalTo("0")
								? "0"
								: V[md.LIQUIDITY_PERCENT].lessThan(new U.h("1", "100"))
								? "<1"
								: V[md.LIQUIDITY_PERCENT].toFixed(0)
						),
						Object(w.a)(
							p,
							md.LIQUIDITY,
							F === md.LIQUIDITY
								? z
								: null !==
										(i =
											null === (c = V[md.LIQUIDITY]) || void 0 === c
												? void 0
												: c.toSignificant(6)) && void 0 !== i
								? i
								: ""
						),
						Object(w.a)(
							p,
							md.CURRENCY_A,
							F === md.CURRENCY_A
								? z
								: null !==
										(o =
											null === (u = V[md.CURRENCY_A]) || void 0 === u
												? void 0
												: u.toSignificant(6)) && void 0 !== o
								? o
								: ""
						),
						Object(w.a)(
							p,
							md.CURRENCY_B,
							F === md.CURRENCY_B
								? z
								: null !==
										(d =
											null === (b = V[md.CURRENCY_B]) || void 0 === b
												? void 0
												: b.toSignificant(6)) && void 0 !== d
								? d
								: ""
						),
						p),
					he =
						null === (f = V[md.LIQUIDITY_PERCENT]) || void 0 === f
							? void 0
							: f.equalTo(new U.h("1")),
					ye = $a(
						null === q ||
							void 0 === q ||
							null === (y = q.liquidityToken) ||
							void 0 === y
							? void 0
							: y.address,
						Ya.abi,
						x
					),
					ve = Object(a.useState)(null),
					Oe = Object(h.a)(ve, 2),
					xe = Oe[0],
					ge = Oe[1],
					we = Au(V[md.LIQUIDITY], se),
					Ce = Object(h.a)(we, 2),
					ke = Ce[0],
					Te = Ce[1];
				function Ie() {
					return (Ie = Object(m.a)(
						j.a.mark(function e() {
							var n, t, r, a, i, c, o, s;
							return j.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											if (ye && q && R) {
												e.next = 2;
												break;
											}
											throw new Error("missing dependencies");
										case 2:
											if ((n = V[md.LIQUIDITY])) {
												e.next = 5;
												break;
											}
											throw new Error("missing liquidity amount");
										case 5:
											return (e.next = 7), ye.nonces(A);
										case 7:
											(t = e.sent),
												(r = Math.ceil(Date.now() / 1e3) + pe),
												(a = [
													{ name: "name", type: "string" },
													{ name: "version", type: "string" },
													{ name: "chainId", type: "uint256" },
													{ name: "verifyingContract", type: "address" },
												]),
												(i = {
													name: "Pancake LPs",
													version: "1",
													chainId: S,
													verifyingContract: q.liquidityToken.address,
												}),
												(c = [
													{ name: "owner", type: "address" },
													{ name: "spender", type: "address" },
													{ name: "value", type: "uint256" },
													{ name: "nonce", type: "uint256" },
													{ name: "deadline", type: "uint256" },
												]),
												(o = {
													owner: A,
													spender: se,
													value: n.raw.toString(),
													nonce: t.toHexString(),
													deadline: r,
												}),
												(s = JSON.stringify({
													types: { EIP712Domain: a, Permit: c },
													domain: i,
													primaryType: "Permit",
													message: o,
												})),
												R.send("eth_signTypedData_v4", [A, s])
													.then(bd.splitSignature)
													.then(function (e) {
														ge({ v: e.v, r: e.r, s: e.s, deadline: r });
													})
													.catch(function (e) {
														4001 !==
															(null === e || void 0 === e ? void 0 : e.code) &&
															Te();
													});
										case 15:
										case "end":
											return e.stop();
									}
							}, e);
						})
					)).apply(this, arguments);
				}
				var Ee = Object(a.useCallback)(
						function (e, n) {
							return ge(null), W(e, n);
						},
						[W]
					),
					Ne = Object(a.useCallback)(
						function (e) {
							return Ee(md.LIQUIDITY, e);
						},
						[Ee]
					),
					Ae = Object(a.useCallback)(
						function (e) {
							return Ee(md.CURRENCY_A, e);
						},
						[Ee]
					),
					Re = Object(a.useCallback)(
						function (e) {
							return Ee(md.CURRENCY_B, e);
						},
						[Ee]
					),
					Ue = hu();
				function Be() {
					return Pe.apply(this, arguments);
				}
				function Pe() {
					return (Pe = Object(m.a)(
						j.a.mark(function e() {
							var n, t, r, a, i, c, o, s, u, l, d, b, p, f, m;
							return j.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											if (S && R && A) {
												e.next = 2;
												break;
											}
											throw new Error("missing dependencies");
										case 2:
											if (
												((t = V[md.CURRENCY_A]), (r = V[md.CURRENCY_B]), t && r)
											) {
												e.next = 5;
												break;
											}
											throw new Error("missing currency amounts");
										case 5:
											if (
												((a = ct(0, R, A)),
												(n = {}),
												Object(w.a)(n, md.CURRENCY_A, at(t, je)[0]),
												Object(w.a)(n, md.CURRENCY_B, at(r, je)[0]),
												(i = n),
												I && E)
											) {
												e.next = 9;
												break;
											}
											throw new Error("missing tokens");
										case 9:
											if ((c = V[md.LIQUIDITY])) {
												e.next = 12;
												break;
											}
											throw new Error("missing liquidity amount");
										case 12:
											if (
												((o = E === U.d),
												(s = I === U.d || o),
												(u = Math.ceil(Date.now() / 1e3) + pe),
												_ && M)
											) {
												e.next = 17;
												break;
											}
											throw new Error("could not wrap");
										case 17:
											if (ke !== xu.APPROVED) {
												e.next = 21;
												break;
											}
											s
												? ((l = [
														"removeLiquidityETH",
														"removeLiquidityETHSupportingFeeOnTransferTokens",
												  ]),
												  (d = [
														o ? _.address : M.address,
														c.raw.toString(),
														i[o ? md.CURRENCY_A : md.CURRENCY_B].toString(),
														i[o ? md.CURRENCY_B : md.CURRENCY_A].toString(),
														A,
														u,
												  ]))
												: ((l = ["removeLiquidity"]),
												  (d = [
														_.address,
														M.address,
														c.raw.toString(),
														i[md.CURRENCY_A].toString(),
														i[md.CURRENCY_B].toString(),
														A,
														u,
												  ])),
												(e.next = 26);
											break;
										case 21:
											if (null === xe) {
												e.next = 25;
												break;
											}
											s
												? ((l = [
														"removeLiquidityETHWithPermit",
														"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
												  ]),
												  (d = [
														o ? _.address : M.address,
														c.raw.toString(),
														i[o ? md.CURRENCY_A : md.CURRENCY_B].toString(),
														i[o ? md.CURRENCY_B : md.CURRENCY_A].toString(),
														A,
														xe.deadline,
														!1,
														xe.v,
														xe.r,
														xe.s,
												  ]))
												: ((l = ["removeLiquidityWithPermit"]),
												  (d = [
														_.address,
														M.address,
														c.raw.toString(),
														i[md.CURRENCY_A].toString(),
														i[md.CURRENCY_B].toString(),
														A,
														xe.deadline,
														!1,
														xe.v,
														xe.r,
														xe.s,
												  ])),
												(e.next = 26);
											break;
										case 25:
											throw new Error(
												"Attempting to confirm without approval or a signature. Please contact support."
											);
										case 26:
											return (
												(e.next = 28),
												Promise.all(
													l.map(function (e, n) {
														var t;
														return (t = a.estimateGas)[e]
															.apply(t, Object(oe.a)(d))
															.then(rt)
															.catch(function (t) {
																console.error("estimateGas failed", n, e, d, t);
															});
													})
												)
											);
										case 28:
											if (
												((b = e.sent),
												-1 !==
													(p = b.findIndex(function (e) {
														return Xn.a.isBigNumber(e);
													})))
											) {
												e.next = 34;
												break;
											}
											console.error(
												"This transaction would fail. Please contact support."
											),
												(e.next = 39);
											break;
										case 34:
											return (
												(f = l[p]),
												(m = b[p]),
												ie(!0),
												(e.next = 39),
												a[f]
													.apply(a, Object(oe.a)(d).concat([{ gasLimit: m }]))
													.then(function (e) {
														var n, t;
														ie(!1),
															Ue(e, {
																summary:
																	"Remove " +
																	(null === (n = V[md.CURRENCY_A]) ||
																	void 0 === n
																		? void 0
																		: n.toSignificant(3)) +
																	" " +
																	(null === I || void 0 === I
																		? void 0
																		: I.symbol) +
																	" and " +
																	(null === (t = V[md.CURRENCY_B]) ||
																	void 0 === t
																		? void 0
																		: t.toSignificant(3)) +
																	" " +
																	(null === E || void 0 === E
																		? void 0
																		: E.symbol),
															}),
															de(e.hash);
													})
													.catch(function (e) {
														ie(!1), console.error(e);
													})
											);
										case 39:
										case "end":
											return e.stop();
									}
							}, e);
						})
					)).apply(this, arguments);
				}
				function _e() {
					var e, n;
					return Object(r.jsxs)(We, {
						gap: "md",
						style: { marginTop: "20px" },
						children: [
							Object(r.jsxs)(Fn, {
								align: "flex-end",
								children: [
									Object(r.jsx)(s.v, {
										fontSize: "24px",
										children:
											null === (e = V[md.CURRENCY_A]) || void 0 === e
												? void 0
												: e.toSignificant(6),
									}),
									Object(r.jsxs)(qn, {
										gap: "4px",
										children: [
											Object(r.jsx)(oc, { currency: I, size: "24px" }),
											Object(r.jsx)(s.v, {
												fontSize: "24px",
												style: { marginLeft: "10px" },
												children:
													null === I || void 0 === I ? void 0 : I.symbol,
											}),
										],
									}),
								],
							}),
							Object(r.jsx)(qn, {
								children: Object(r.jsx)(pd.a, {
									size: "16",
									color: D.colors.textSubtle,
								}),
							}),
							Object(r.jsxs)(Fn, {
								align: "flex-end",
								children: [
									Object(r.jsx)(s.v, {
										fontSize: "24px",
										children:
											null === (n = V[md.CURRENCY_B]) || void 0 === n
												? void 0
												: n.toSignificant(6),
									}),
									Object(r.jsxs)(qn, {
										gap: "4px",
										children: [
											Object(r.jsx)(oc, { currency: E, size: "24px" }),
											Object(r.jsx)(s.v, {
												fontSize: "24px",
												style: { marginLeft: "10px" },
												children:
													null === E || void 0 === E ? void 0 : E.symbol,
											}),
										],
									}),
								],
							}),
							Object(r.jsx)(An, {
								fontSize: 12,
								color: D.colors.textSubtle,
								textAlign: "left",
								padding: "12px 0 0 0",
								children: "Output is estimated. If the price changes by more than ".concat(
									je / 100,
									"% your transaction will revert."
								),
							}),
						],
					});
				}
				function Me() {
					var e;
					return Object(r.jsxs)(r.Fragment, {
						children: [
							Object(r.jsxs)(Fn, {
								children: [
									Object(r.jsxs)(s.v, {
										color: "textSubtle",
										children: [
											"FLIP " +
												(null === I || void 0 === I ? void 0 : I.symbol) +
												"/" +
												(null === E || void 0 === E ? void 0 : E.symbol),
											" Burned",
										],
									}),
									Object(r.jsxs)(qn, {
										children: [
											Object(r.jsx)(So, {
												currency0: I,
												currency1: E,
												margin: !0,
											}),
											Object(r.jsx)(s.v, {
												children:
													null === (e = V[md.LIQUIDITY]) || void 0 === e
														? void 0
														: e.toSignificant(6),
											}),
										],
									}),
								],
							}),
							q &&
								Object(r.jsxs)(r.Fragment, {
									children: [
										Object(r.jsxs)(Fn, {
											children: [
												Object(r.jsx)(s.v, {
													color: "textSubtle",
													children: "Price",
												}),
												Object(r.jsxs)(s.v, {
													children: [
														"1 ",
														null === I || void 0 === I ? void 0 : I.symbol,
														" = ",
														_ ? q.priceOf(_).toSignificant(6) : "-",
														" ",
														null === E || void 0 === E ? void 0 : E.symbol,
													],
												}),
											],
										}),
										Object(r.jsxs)(Fn, {
											children: [
												Object(r.jsx)("div", {}),
												Object(r.jsxs)(s.v, {
													children: [
														"1 ",
														null === E || void 0 === E ? void 0 : E.symbol,
														" = ",
														M ? q.priceOf(M).toSignificant(6) : "-",
														" ",
														null === I || void 0 === I ? void 0 : I.symbol,
													],
												}),
											],
										}),
									],
								}),
							Object(r.jsx)(s.c, {
								disabled: !(ke === xu.APPROVED || null !== xe),
								onClick: Be,
								children: "Confirm",
							}),
						],
					});
				}
				var Le = "Removing "
						.concat(
							null === (v = V[md.CURRENCY_A]) || void 0 === v
								? void 0
								: v.toSignificant(6),
							" "
						)
						.concat(null === I || void 0 === I ? void 0 : I.symbol, " and ")
						.concat(
							null === (O = V[md.CURRENCY_B]) || void 0 === O
								? void 0
								: O.toSignificant(6),
							" "
						)
						.concat(null === E || void 0 === E ? void 0 : E.symbol),
					Fe = Object(a.useCallback)(
						function (e) {
							Ee(md.LIQUIDITY_PERCENT, e.toString());
						},
						[Ee]
					),
					ze = I === U.d || E === U.d,
					Ye = Boolean(
						S &&
							((I && Object(U.q)(U.p[S], I)) || (E && Object(U.q)(U.p[S], E)))
					),
					qe = Object(a.useCallback)(
						function (e) {
							T && us(e) === T
								? g.push("/remove/".concat(us(e), "/").concat(k))
								: g.push("/remove/".concat(us(e), "/").concat(T));
						},
						[k, T, g]
					),
					Ve = Object(a.useCallback)(
						function (e) {
							k && us(e) === k
								? g.push("/remove/".concat(T, "/").concat(us(e)))
								: g.push("/remove/".concat(k, "/").concat(us(e)));
						},
						[k, T, g]
					),
					Ke = Object(a.useCallback)(
						function () {
							X(!1), ge(null), le && Ee(md.LIQUIDITY_PERCENT, "0"), de("");
						},
						[Ee, le]
					),
					Ge = (function (e, n) {
						var t =
								arguments.length > 2 && void 0 !== arguments[2]
									? arguments[2]
									: 100,
							r = Object(a.useState)(function () {
								return e;
							}),
							i = Object(h.a)(r, 2),
							c = i[0],
							o = i[1],
							s = Object(a.useRef)(),
							u = Object(a.useCallback)(
								function (e) {
									o(e),
										s.current && clearTimeout(s.current),
										(s.current = setTimeout(function () {
											n(e), (s.current = void 0);
										}, t));
								},
								[t, n]
							);
						return (
							Object(a.useEffect)(
								function () {
									s.current && (clearTimeout(s.current), (s.current = void 0)),
										o(e);
								},
								[e]
							),
							[c, u]
						);
					})(Number.parseInt(V[md.LIQUIDITY_PERCENT].toFixed(0)), Fe),
					Qe = Object(h.a)(Ge, 2),
					Je = Qe[0],
					Xe = Qe[1];
				return Object(r.jsxs)(r.Fragment, {
					children: [
						Object(r.jsxs)(Xu, {
							children: [
								Object(r.jsx)(is, { adding: !1 }),
								Object(r.jsxs)(tl, {
									children: [
										Object(r.jsx)(Ir, {
											isOpen: J,
											onDismiss: Ke,
											attemptingTxn: ae,
											hash: le || "",
											content: function () {
												return Object(r.jsx)(Cr, {
													title: "You will receive",
													onDismiss: Ke,
													topContent: _e,
													bottomContent: Me,
												});
											},
											pendingText: Le,
										}),
										Object(r.jsxs)(We, {
											gap: "md",
											children: [
												Object(r.jsx)(Cd, {
													children: Object(r.jsx)(wd, {
														children: Object(r.jsxs)(We, {
															children: [
																Object(r.jsxs)(Fn, {
																	children: [
																		Object(r.jsx)(s.v, { children: "Amount" }),
																		Object(r.jsx)(rl, {
																			onClick: function () {
																				ne(!ee);
																			},
																			children: ee ? "Simple" : "Detailed",
																		}),
																	],
																}),
																Object(r.jsx)(s.l, {
																	justifyContent: "start",
																	children: Object(r.jsxs)(s.v, {
																		fontSize: "64px",
																		children: [me[md.LIQUIDITY_PERCENT], "%"],
																	}),
																}),
																!ee &&
																	Object(r.jsxs)(r.Fragment, {
																		children: [
																			Object(r.jsx)(s.l, {
																				mb: "8px",
																				children: Object(r.jsx)(yd, {
																					value: Je,
																					onChange: Xe,
																				}),
																			}),
																			Object(r.jsxs)(s.l, {
																				justifyContent: "space-around",
																				children: [
																					Object(r.jsx)(s.c, {
																						variant: "tertiary",
																						size: "sm",
																						onClick: function () {
																							return Ee(
																								md.LIQUIDITY_PERCENT,
																								"25"
																							);
																						},
																						children: "25%",
																					}),
																					Object(r.jsx)(s.c, {
																						variant: "tertiary",
																						size: "sm",
																						onClick: function () {
																							return Ee(
																								md.LIQUIDITY_PERCENT,
																								"50"
																							);
																						},
																						children: "50%",
																					}),
																					Object(r.jsx)(s.c, {
																						variant: "tertiary",
																						size: "sm",
																						onClick: function () {
																							return Ee(
																								md.LIQUIDITY_PERCENT,
																								"75"
																							);
																						},
																						children: "75%",
																					}),
																					Object(r.jsx)(s.c, {
																						variant: "tertiary",
																						size: "sm",
																						onClick: function () {
																							return Ee(
																								md.LIQUIDITY_PERCENT,
																								"100"
																							);
																						},
																						children: "Max",
																					}),
																				],
																			}),
																		],
																	}),
															],
														}),
													}),
												}),
												!ee &&
													Object(r.jsxs)(r.Fragment, {
														children: [
															Object(r.jsx)(He, {
																children: Object(r.jsx)(fd.a, {
																	size: "16",
																	color: D.colors.textSubtle,
																}),
															}),
															Object(r.jsx)(Cd, {
																children: Object(r.jsx)(wd, {
																	children: Object(r.jsxs)(We, {
																		gap: "10px",
																		children: [
																			Object(r.jsxs)(Fn, {
																				children: [
																					Object(r.jsx)(s.v, {
																						fontSize: "24px",
																						children: me[md.CURRENCY_A] || "-",
																					}),
																					Object(r.jsxs)(qn, {
																						children: [
																							Object(r.jsx)(oc, {
																								currency: I,
																								style: { marginRight: "12px" },
																							}),
																							Object(r.jsx)(s.v, {
																								fontSize: "24px",
																								id:
																									"remove-liquidity-tokena-symbol",
																								children:
																									null === I || void 0 === I
																										? void 0
																										: I.symbol,
																							}),
																						],
																					}),
																				],
																			}),
																			Object(r.jsxs)(Fn, {
																				children: [
																					Object(r.jsx)(s.v, {
																						fontSize: "24px",
																						children: me[md.CURRENCY_B] || "-",
																					}),
																					Object(r.jsxs)(qn, {
																						children: [
																							Object(r.jsx)(oc, {
																								currency: E,
																								style: { marginRight: "12px" },
																							}),
																							Object(r.jsx)(s.v, {
																								fontSize: "24px",
																								id:
																									"remove-liquidity-tokenb-symbol",
																								children:
																									null === E || void 0 === E
																										? void 0
																										: E.symbol,
																							}),
																						],
																					}),
																				],
																			}),
																			S && (Ye || ze)
																				? Object(r.jsx)(Fn, {
																						style: {
																							justifyContent: "flex-end",
																						},
																						children: ze
																							? Object(r.jsx)(mn, {
																									to: "/remove/"
																										.concat(
																											I === U.d
																												? U.p[S].address
																												: k,
																											"/"
																										)
																										.concat(
																											E === U.d
																												? U.p[S].address
																												: T
																										),
																									children: "Receive WBNB",
																							  })
																							: Ye
																							? Object(r.jsx)(mn, {
																									to: "/remove/"
																										.concat(
																											I &&
																												Object(U.q)(I, U.p[S])
																												? "ETH"
																												: k,
																											"/"
																										)
																										.concat(
																											E &&
																												Object(U.q)(E, U.p[S])
																												? "ETH"
																												: T
																										),
																									children: "Receive BNB",
																							  })
																							: null,
																				  })
																				: null,
																		],
																	}),
																}),
															}),
														],
													}),
												Object(r.jsxs)(Cd, {
													style: { paddingBottom: "24px" },
													children: [
														ee &&
															Object(r.jsxs)(r.Fragment, {
																children: [
																	Object(r.jsx)(Go, {
																		value: me[md.LIQUIDITY],
																		onUserInput: Ne,
																		onMax: function () {
																			Ee(md.LIQUIDITY_PERCENT, "100");
																		},
																		showMaxButton: !he,
																		disableCurrencySelect: !0,
																		currency:
																			null === q || void 0 === q
																				? void 0
																				: q.liquidityToken,
																		pair: q,
																		id: "liquidity-amount",
																	}),
																	Object(r.jsx)(He, {
																		children: Object(r.jsx)(fd.a, {
																			size: "16",
																			color: D.colors.textSubtle,
																		}),
																	}),
																	Object(r.jsx)(Go, {
																		hideBalance: !0,
																		value: me[md.CURRENCY_A],
																		onUserInput: Ae,
																		onMax: function () {
																			return Ee(md.LIQUIDITY_PERCENT, "100");
																		},
																		showMaxButton: !he,
																		currency: I,
																		label: "Output",
																		onCurrencySelect: qe,
																		id: "remove-liquidity-tokena",
																	}),
																	Object(r.jsx)(He, {
																		children: Object(r.jsx)(pd.a, {
																			size: "16",
																			color: D.colors.textSubtle,
																		}),
																	}),
																	Object(r.jsx)(Go, {
																		hideBalance: !0,
																		value: me[md.CURRENCY_B],
																		onUserInput: Re,
																		onMax: function () {
																			return Ee(md.LIQUIDITY_PERCENT, "100");
																		},
																		showMaxButton: !he,
																		currency: E,
																		label: "Output",
																		onCurrencySelect: Ve,
																		id: "remove-liquidity-tokenb",
																	}),
																],
															}),
														q &&
															Object(r.jsxs)("div", {
																style: { padding: "24px" },
																children: [
																	Object(r.jsxs)(s.l, {
																		justifyContent: "space-between",
																		mb: "8px",
																		children: [
																			"Price:",
																			Object(r.jsxs)("div", {
																				children: [
																					"1 ",
																					null === I || void 0 === I
																						? void 0
																						: I.symbol,
																					" = ",
																					_
																						? q.priceOf(_).toSignificant(6)
																						: "-",
																					" ",
																					null === E || void 0 === E
																						? void 0
																						: E.symbol,
																				],
																			}),
																		],
																	}),
																	Object(r.jsxs)(s.l, {
																		justifyContent: "space-between",
																		children: [
																			Object(r.jsx)("div", {}),
																			Object(r.jsxs)("div", {
																				children: [
																					"1 ",
																					null === E || void 0 === E
																						? void 0
																						: E.symbol,
																					" = ",
																					M
																						? q.priceOf(M).toSignificant(6)
																						: "-",
																					" ",
																					null === I || void 0 === I
																						? void 0
																						: I.symbol,
																				],
																			}),
																		],
																	}),
																],
															}),
														Object(r.jsx)("div", {
															style: { position: "relative" },
															children: A
																? Object(r.jsxs)(Fn, {
																		children: [
																			Object(r.jsx)(s.c, {
																				onClick: function () {
																					return Ie.apply(this, arguments);
																				},
																				variant:
																					ke === xu.APPROVED || null !== xe
																						? "success"
																						: "primary",
																				disabled:
																					ke !== xu.NOT_APPROVED || null !== xe,
																				mr: "8px",
																				children:
																					ke === xu.PENDING
																						? Object(r.jsx)(Ss, {
																								children: "Approving",
																						  })
																						: ke === xu.APPROVED || null !== xe
																						? "Approved"
																						: "Approve",
																			}),
																			Object(r.jsx)(s.c, {
																				onClick: function () {
																					X(!0);
																				},
																				disabled:
																					!K ||
																					(null === xe && ke !== xu.APPROVED),
																				variant:
																					!K &&
																					V[md.CURRENCY_A] &&
																					V[md.CURRENCY_B]
																						? "danger"
																						: "primary",
																				children: H || "Remove",
																			}),
																		],
																  })
																: Object(r.jsx)(ul, { fullWidth: !0 }),
														}),
													],
												}),
											],
										}),
									],
								}),
							],
						}),
						q
							? Object(r.jsx)(We, {
									style: { minWidth: "20rem", marginTop: "1rem" },
									children: Object(r.jsx)(Fs, { showUnwrapped: Ye, pair: q }),
							  })
							: null,
					],
				});
			}
			var Td = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;
			function Id(e) {
				var n = e.match.params.tokens;
				if (!Td.test(n)) return Object(r.jsx)(v.a, { to: "/pool" });
				var t = n.split("-"),
					a = Object(h.a)(t, 2),
					i = a[0],
					c = a[1];
				return Object(r.jsx)(v.a, { to: "/remove/".concat(i, "/").concat(c) });
			}
			function Ed() {
				var e = Object(u.a)([
					"\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ",
					";\n  transition: color 300ms ",
					";\n  color: ",
					";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ",
					";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",
					";\n  }\n",
				]);
				return (
					(Ed = function () {
						return e;
					}),
					e
				);
			}
			function Nd() {
				var e = Object(u.a)(["\n  flex: 1;\n  padding: 1rem;\n"]);
				return (
					(Nd = function () {
						return e;
					}),
					e
				);
			}
			function Ad() {
				var e = Object(u.a)([
					"\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ",
					";\n  transition: border-color 300ms ",
					",\n    color 500ms ",
					";\n  background-color: ",
					";\n",
				]);
				return (
					(Ad = function () {
						return e;
					}),
					e
				);
			}
			function Sd() {
				var e = Object(u.a)([
					"\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ",
					";\n  z-index: 1;\n  width: 100%;\n",
				]);
				return (
					(Sd = function () {
						return e;
					}),
					e
				);
			}
			var Rd = l.default.div(Sd(), function (e) {
					return e.theme.colors.invertedContrast;
				}),
				Ud = l.default.div(
					Ad(),
					function (e) {
						var n = e.error,
							t = e.theme;
						return n ? t.colors.failure : t.colors.invertedContrast;
					},
					function (e) {
						return e.error ? "step-end" : "step-start";
					},
					function (e) {
						return e.error ? "step-end" : "step-start";
					},
					function (e) {
						return e.theme.colors.invertedContrast;
					}
				),
				Bd = l.default.div(Nd()),
				Pd = l.default.input(
					Ed(),
					function (e) {
						return e.theme.colors.invertedContrast;
					},
					function (e) {
						return e.error ? "step-end" : "step-start";
					},
					function (e) {
						var n = e.error,
							t = e.theme;
						return n ? t.colors.failure : t.colors.primary;
					},
					function (e) {
						return e.theme.colors.textDisabled;
					},
					function (e) {
						return e.theme.colors.textDisabled;
					}
				);
			function _d(e) {
				var n = e.id,
					t = e.value,
					i = e.onChange,
					c = Se().chainId,
					o = Object(a.useContext)(l.ThemeContext),
					s = Bu(t),
					u = s.address,
					d = s.loading,
					b = s.name,
					p = Object(a.useCallback)(
						function (e) {
							var n = e.target.value.replace(/\s+/g, "");
							i(n);
						},
						[i]
					),
					f = Boolean(t.length > 0 && !d && !u);
				return Object(r.jsx)(Rd, {
					id: n,
					children: Object(r.jsx)(Ud, {
						error: f,
						children: Object(r.jsx)(Bd, {
							children: Object(r.jsxs)(We, {
								gap: "md",
								children: [
									Object(r.jsxs)(Fn, {
										children: [
											Object(r.jsx)(Cn, {
												color: o.colors.textSubtle,
												fontWeight: 500,
												fontSize: 14,
												children: "Recipient",
											}),
											u &&
												c &&
												Object(r.jsx)(yn, {
													href: nt(
														c,
														null !== b && void 0 !== b ? b : u,
														"address"
													),
													style: { fontSize: "14px" },
													children: "(View on bscscan)",
												}),
										],
									}),
									Object(r.jsx)(Pd, {
										className: "recipient-address-input",
										type: "text",
										autoComplete: "off",
										autoCorrect: "off",
										autoCapitalize: "off",
										spellCheck: "false",
										placeholder: "Wallet Address or ENS name",
										error: f,
										pattern: "^(0x[a-fA-F0-9]{40})$",
										onChange: p,
										value: t,
									}),
								],
							}),
						}),
					}),
				});
			}
			var Md = t(503);
			function Dd(e) {
				var n = e.priceImpact;
				return Object(r.jsx)(Ns, {
					fontSize: "14px",
					severity: Eu(n),
					children: n
						? n.lessThan(ge)
							? "<0.01%"
							: "".concat(n.toFixed(2), "%")
						: "-",
				});
			}
			function Ld(e) {
				var n,
					t,
					i,
					c,
					o = e.trade,
					u = e.onConfirm,
					l = e.allowedSlippage,
					d = e.swapErrorMessage,
					b = e.disabledConfirm,
					p = Object(a.useState)(!1),
					f = Object(h.a)(p, 2),
					j = f[0],
					m = f[1],
					y = Object(a.useMemo)(
						function () {
							return Iu(o, l);
						},
						[l, o]
					),
					v = Object(a.useMemo)(
						function () {
							return Tu(o);
						},
						[o]
					),
					O = v.priceImpactWithoutFee,
					x = v.realizedLPFee,
					g = Eu(O);
				return Object(r.jsxs)(r.Fragment, {
					children: [
						Object(r.jsxs)(We, {
							gap: "0px",
							children: [
								Object(r.jsxs)(Fn, {
									align: "center",
									children: [
										Object(r.jsx)(s.v, { fontSize: "14px", children: "Price" }),
										Object(r.jsxs)(s.v, {
											fontSize: "14px",
											style: {
												justifyContent: "center",
												alignItems: "center",
												display: "flex",
												textAlign: "right",
												paddingLeft: "8px",
												fontWeight: 500,
											},
											children: [
												Nu(o, j),
												Object(r.jsx)(As, {
													onClick: function () {
														return m(!j);
													},
													children: Object(r.jsx)(Md.a, { size: 14 }),
												}),
											],
										}),
									],
								}),
								Object(r.jsxs)(Fn, {
									children: [
										Object(r.jsxs)(qn, {
											children: [
												Object(r.jsx)(s.v, {
													fontSize: "14px",
													children:
														o.tradeType === U.o.EXACT_INPUT
															? "Minimum received"
															: "Maximum sold",
												}),
												Object(r.jsx)($i, {
													text:
														"Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.",
												}),
											],
										}),
										Object(r.jsxs)(qn, {
											children: [
												Object(r.jsx)(s.v, {
													fontSize: "14px",
													children:
														o.tradeType === U.o.EXACT_INPUT
															? null !==
																	(n =
																		null === (t = y[au.OUTPUT]) || void 0 === t
																			? void 0
																			: t.toSignificant(4)) && void 0 !== n
																? n
																: "-"
															: null !==
																	(i =
																		null === (c = y[au.INPUT]) || void 0 === c
																			? void 0
																			: c.toSignificant(4)) && void 0 !== i
															? i
															: "-",
												}),
												Object(r.jsx)(s.v, {
													fontSize: "14px",
													marginLeft: "4px",
													children:
														o.tradeType === U.o.EXACT_INPUT
															? o.outputAmount.currency.symbol
															: o.inputAmount.currency.symbol,
												}),
											],
										}),
									],
								}),
								Object(r.jsxs)(Fn, {
									children: [
										Object(r.jsxs)(qn, {
											children: [
												Object(r.jsx)(s.v, {
													fontSize: "14px",
													children: "Price Impact",
												}),
												Object(r.jsx)($i, {
													text:
														"The difference between the market price and your price due to trade size.",
												}),
											],
										}),
										Object(r.jsx)(Dd, { priceImpact: O }),
									],
								}),
								Object(r.jsxs)(Fn, {
									children: [
										Object(r.jsxs)(qn, {
											children: [
												Object(r.jsx)(s.v, {
													fontSize: "14px",
													children: "Liquidity Provider Fee",
												}),
												Object(r.jsx)($i, {
													text:
														"For each trade a 0.2% fee is paid. 0.17% goes to liquidity providers and 0.03% goes to the PancakeSwap treasury.",
												}),
											],
										}),
										Object(r.jsx)(s.v, {
											fontSize: "14px",
											children: x
												? (null === x || void 0 === x
														? void 0
														: x.toSignificant(6)) +
												  " " +
												  o.inputAmount.currency.symbol
												: "-",
										}),
									],
								}),
							],
						}),
						Object(r.jsxs)(Yn, {
							children: [
								Object(r.jsx)(s.c, {
									onClick: u,
									disabled: b,
									variant: g > 2 ? "danger" : "primary",
									mt: "10px",
									id: "confirm-swap-or-send",
									fullWidth: !0,
									children: g > 2 ? "Swap Anyway" : "Confirm Swap",
								}),
								d ? Object(r.jsx)(Bs, { error: d }) : null,
							],
						}),
					],
				});
			}
			function Fd() {
				var e = Object(u.a)([
					"\n  font-style: italic;\n  line-height: 1.3;\n\n  span {\n    color: ",
					";\n    font-weight: 600;\n  }\n",
				]);
				return (
					(Fd = function () {
						return e;
					}),
					e
				);
			}
			var zd = Object(l.default)(s.v)(Fd(), function (e) {
				return e.theme.colors.primary;
			});
			function Yd(e) {
				var n,
					t,
					i = e.trade,
					c = e.allowedSlippage,
					o = e.recipient,
					u = e.showAcceptChanges,
					d = e.onAcceptChanges,
					b = Object(a.useMemo)(
						function () {
							return Iu(i, c);
						},
						[i, c]
					),
					p = Eu(
						Object(a.useMemo)(
							function () {
								return Tu(i);
							},
							[i]
						).priceImpactWithoutFee
					),
					f = Object(a.useContext)(l.ThemeContext);
				return Object(r.jsxs)(We, {
					gap: "md",
					style: { marginTop: "20px" },
					children: [
						Object(r.jsxs)(Fn, {
							align: "flex-end",
							children: [
								Object(r.jsxs)(qn, {
									gap: "0px",
									children: [
										Object(r.jsx)(oc, {
											currency: i.inputAmount.currency,
											size: "24px",
											style: { marginRight: "12px" },
										}),
										Object(r.jsx)(s.v, {
											fontSize: "24px",
											color:
												u && i.tradeType === U.o.EXACT_OUTPUT
													? f.colors.primary
													: "text",
											children: i.inputAmount.toSignificant(6),
										}),
									],
								}),
								Object(r.jsx)(qn, {
									gap: "0px",
									children: Object(r.jsx)(s.v, {
										fontSize: "24px",
										style: { marginLeft: "10px", fontWeight: 500 },
										children: i.inputAmount.currency.symbol,
									}),
								}),
							],
						}),
						Object(r.jsx)(qn, {
							children: Object(r.jsx)(fd.a, {
								size: "16",
								color: f.colors.textSubtle,
								style: { marginLeft: "4px", minWidth: "16px" },
							}),
						}),
						Object(r.jsxs)(Fn, {
							align: "flex-end",
							children: [
								Object(r.jsxs)(qn, {
									gap: "0px",
									children: [
										Object(r.jsx)(oc, {
											currency: i.outputAmount.currency,
											size: "24px",
											style: { marginRight: "12px" },
										}),
										Object(r.jsx)(s.v, {
											fontSize: "24px",
											style: { marginLeft: "10px", fontWeight: 500 },
											color:
												p > 2
													? f.colors.failure
													: u && i.tradeType === U.o.EXACT_INPUT
													? f.colors.primary
													: "text",
											children: i.outputAmount.toSignificant(6),
										}),
									],
								}),
								Object(r.jsx)(qn, {
									gap: "0px",
									children: Object(r.jsx)(s.v, {
										fontSize: "24px",
										style: { marginLeft: "10px", fontWeight: 500 },
										children: i.outputAmount.currency.symbol,
									}),
								}),
							],
						}),
						u
							? Object(r.jsx)(Ps, {
									justify: "flex-start",
									gap: "0px",
									children: Object(r.jsxs)(Fn, {
										children: [
											Object(r.jsxs)(qn, {
												children: [
													Object(r.jsx)(kr.a, {
														size: 20,
														style: { marginRight: "8px", minWidth: 24 },
													}),
													Object(r.jsx)(wn, {
														color: f.colors.primary,
														children: " Price Updated",
													}),
												],
											}),
											Object(r.jsx)(s.c, { onClick: d, children: "Accept" }),
										],
									}),
							  })
							: null,
						Object(r.jsx)(We, {
							justify: "flex-start",
							gap: "sm",
							style: { padding: "16px 0 0" },
							children:
								i.tradeType === U.o.EXACT_INPUT
									? Object(r.jsxs)(zd, {
											children: [
												"Output is estimated. You will receive at least ",
												Object(r.jsxs)("span", {
													children: [
														null === (n = b[au.OUTPUT]) || void 0 === n
															? void 0
															: n.toSignificant(6),
														" ",
														i.outputAmount.currency.symbol,
													],
												}),
												" or the transaction will revert.",
											],
									  })
									: Object(r.jsxs)(zd, {
											children: [
												"Input is estimated. You will sell at most ",
												Object(r.jsxs)("span", {
													children: [
														null === (t = b[au.INPUT]) || void 0 === t
															? void 0
															: t.toSignificant(6),
														" ",
														i.inputAmount.currency.symbol,
													],
												}),
												" or the transaction will revert.",
											],
									  }),
						}),
						null !== o
							? Object(r.jsx)(We, {
									justify: "flex-start",
									gap: "sm",
									style: { padding: "16px 0 0" },
									children: Object(r.jsxs)(wn, {
										children: [
											"Output will be sent to",
											" ",
											Object(r.jsx)("b", {
												title: o,
												children: $n(o) ? tt(o) : o,
											}),
										],
									}),
							  })
							: null,
					],
				});
			}
			function qd(e) {
				var n,
					t,
					i,
					c,
					o,
					s,
					u = e.trade,
					l = e.originalTrade,
					d = e.onAcceptChanges,
					b = e.allowedSlippage,
					p = e.onConfirm,
					f = e.onDismiss,
					j = e.recipient,
					m = e.swapErrorMessage,
					h = e.isOpen,
					y = e.attemptingTxn,
					v = e.txHash,
					O = Object(a.useMemo)(
						function () {
							return Boolean(
								u &&
									l &&
									((n = l),
									(e = u).tradeType !== n.tradeType ||
										!Object(U.q)(
											e.inputAmount.currency,
											n.inputAmount.currency
										) ||
										!e.inputAmount.equalTo(n.inputAmount) ||
										!Object(U.q)(
											e.outputAmount.currency,
											n.outputAmount.currency
										) ||
										!e.outputAmount.equalTo(n.outputAmount))
							);
							var e, n;
						},
						[l, u]
					),
					x = Object(a.useCallback)(
						function () {
							return u
								? Object(r.jsx)(Yd, {
										trade: u,
										allowedSlippage: b,
										recipient: j,
										showAcceptChanges: O,
										onAcceptChanges: d,
								  })
								: null;
						},
						[b, d, j, O, u]
					),
					g = Object(a.useCallback)(
						function () {
							return u
								? Object(r.jsx)(Ld, {
										onConfirm: p,
										trade: u,
										disabledConfirm: O,
										swapErrorMessage: m,
										allowedSlippage: b,
								  })
								: null;
						},
						[b, p, O, m, u]
					),
					w = "Swapping "
						.concat(
							null === u ||
								void 0 === u ||
								null === (n = u.inputAmount) ||
								void 0 === n
								? void 0
								: n.toSignificant(6),
							" "
						)
						.concat(
							null === u ||
								void 0 === u ||
								null === (t = u.inputAmount) ||
								void 0 === t ||
								null === (i = t.currency) ||
								void 0 === i
								? void 0
								: i.symbol,
							" for "
						)
						.concat(
							null === u ||
								void 0 === u ||
								null === (c = u.outputAmount) ||
								void 0 === c
								? void 0
								: c.toSignificant(6),
							" "
						)
						.concat(
							null === u ||
								void 0 === u ||
								null === (o = u.outputAmount) ||
								void 0 === o ||
								null === (s = o.currency) ||
								void 0 === s
								? void 0
								: s.symbol
						),
					C = Object(a.useCallback)(
						function () {
							return m
								? Object(r.jsx)(Tr, { onDismiss: f, message: m })
								: Object(r.jsx)(Cr, {
										title: "Confirm Swap",
										onDismiss: f,
										topContent: x,
										bottomContent: g,
								  });
						},
						[f, g, x, m]
					);
				return Object(r.jsx)(Ir, {
					isOpen: h,
					onDismiss: f,
					attemptingTxn: y,
					hash: v,
					content: C,
					pendingText: w,
				});
			}
			var Vd = t(504),
				Hd = Object(a.memo)(function (e) {
					var n = e.trade,
						t = Object(a.useContext)(l.ThemeContext);
					return Object(r.jsx)(s.l, {
						px: "1rem",
						py: "0.5rem",
						my: "0.5rem",
						style: {
							border: "1px solid ".concat(t.colors.tertiary),
							borderRadius: "1rem",
						},
						flexWrap: "wrap",
						justifyContent: "space-evenly",
						alignItems: "center",
						children: n.route.path.map(function (e, n, i) {
							var c = n === i.length - 1;
							return Object(r.jsxs)(
								a.Fragment,
								{
									children: [
										Object(r.jsxs)(s.l, {
											my: "0.5rem",
											alignItems: "center",
											style: { flexShrink: 0 },
											children: [
												Object(r.jsx)(oc, { currency: e, size: "1.5rem" }),
												Object(r.jsx)(Cn, {
													fontSize: 14,
													color: t.colors.text,
													ml: "0.5rem",
													children: e.symbol,
												}),
											],
										}),
										c
											? null
											: Object(r.jsx)(Vd.a, { color: t.colors.textSubtle }),
									],
								},
								n
							);
						}),
					});
				});
			function Wd(e) {
				var n,
					t,
					a,
					i,
					c = e.trade,
					o = e.allowedSlippage,
					u = Tu(c),
					l = u.priceImpactWithoutFee,
					d = u.realizedLPFee,
					b = c.tradeType === U.o.EXACT_INPUT,
					p = Iu(c, o);
				return Object(r.jsx)(s.f, {
					children: Object(r.jsxs)(s.g, {
						children: [
							Object(r.jsxs)(Fn, {
								children: [
									Object(r.jsxs)(qn, {
										children: [
											Object(r.jsx)(s.v, {
												fontSize: "14px",
												children: b ? "Minimum received" : "Maximum sold",
											}),
											Object(r.jsx)($i, {
												text:
													"Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.",
											}),
										],
									}),
									Object(r.jsx)(qn, {
										children: Object(r.jsx)(s.v, {
											fontSize: "14px",
											children: b
												? null !==
														(n = ""
															.concat(
																null === (t = p[au.OUTPUT]) || void 0 === t
																	? void 0
																	: t.toSignificant(4),
																" "
															)
															.concat(c.outputAmount.currency.symbol)) &&
												  void 0 !== n
													? n
													: "-"
												: null !==
														(a = ""
															.concat(
																null === (i = p[au.INPUT]) || void 0 === i
																	? void 0
																	: i.toSignificant(4),
																" "
															)
															.concat(c.inputAmount.currency.symbol)) &&
												  void 0 !== a
												? a
												: "-",
										}),
									}),
								],
							}),
							Object(r.jsxs)(Fn, {
								children: [
									Object(r.jsxs)(qn, {
										children: [
											Object(r.jsx)(s.v, {
												fontSize: "14px",
												children: "Price Impact",
											}),
											Object(r.jsx)($i, {
												text:
													"The difference between the market price and estimated price due to trade size.",
											}),
										],
									}),
									Object(r.jsx)(Dd, { priceImpact: l }),
								],
							}),
							Object(r.jsxs)(Fn, {
								children: [
									Object(r.jsxs)(qn, {
										children: [
											Object(r.jsx)(s.v, {
												fontSize: "14px",
												children: "Liquidity Provider Fee",
											}),
											Object(r.jsx)($i, {
												text:
													"For each trade a 0.2% fee is paid. 0.17% goes to liquidity providers and 0.03% goes to the PancakeSwap treasury.",
											}),
										],
									}),
									Object(r.jsx)(s.v, {
										fontSize: "14px",
										children: d
											? ""
													.concat(d.toSignificant(4), " ")
													.concat(c.inputAmount.currency.symbol)
											: "-",
									}),
								],
							}),
						],
					}),
				});
			}
			function Kd(e) {
				var n = e.trade,
					t = Ba(),
					a = Object(h.a)(t, 1)[0],
					i = Boolean(n && n.route.path.length > 2);
				return Object(r.jsx)(We, {
					gap: "md",
					children:
						n &&
						Object(r.jsxs)(r.Fragment, {
							children: [
								Object(r.jsx)(Wd, { trade: n, allowedSlippage: a }),
								i &&
									Object(r.jsxs)(r.Fragment, {
										children: [
											Object(r.jsx)(Is, {}),
											Object(r.jsxs)(We, {
												style: { padding: "0 24px" },
												children: [
													Object(r.jsxs)(qn, {
														children: [
															Object(r.jsx)(s.v, {
																fontSize: "14px",
																children: "Route",
															}),
															Object(r.jsx)($i, {
																text:
																	"Routing through these tokens resulted in the best price for your trade.",
															}),
														],
													}),
													Object(r.jsx)(Hd, { trade: n }),
												],
											}),
										],
									}),
							],
						}),
				});
			}
			function Gd() {
				var e = Object(u.a)([
					"\n  padding-top: calc(16px + 2rem);\n  padding-bottom: 20px;\n  margin-top: -2rem;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ",
					";\n  background-color: ",
					";\n  z-index: -1;\n\n  transform: ",
					";\n  transition: transform 300ms ease-in-out;\n",
				]);
				return (
					(Gd = function () {
						return e;
					}),
					e
				);
			}
			var Qd = l.default.div(
				Gd(),
				function (e) {
					return e.theme.colors.textSubtle;
				},
				function (e) {
					return e.theme.colors.background;
				},
				function (e) {
					return e.show ? "translateY(0%)" : "translateY(-100%)";
				}
			);
			function Jd(e) {
				var n,
					t = e.trade,
					a = Object(tn.a)(e, ["trade"]),
					i = hi(t, yi);
				return Object(r.jsx)(Qd, {
					show: Boolean(t),
					children: Object(r.jsx)(
						Kd,
						Object(V.a)(
							Object(V.a)({}, a),
							{},
							{
								trade:
									null !== (n = null !== t && void 0 !== t ? t : i) &&
									void 0 !== n
										? n
										: void 0,
							}
						)
					),
				});
			}
			function Xd(e) {
				var n = e.version,
					t = Object(v.g)(),
					i = Qs(),
					c = Object(a.useMemo)(
						function () {
							return Object(V.a)(
								Object(V.a)({}, t),
								{},
								{
									search: "?".concat(
										Object(Gs.stringify)(
											Object(V.a)(
												Object(V.a)({}, i),
												{},
												{ use: n !== Js ? n : void 0 }
											)
										)
									),
								}
							);
						},
						[t, i, n]
					);
				return Object(r.jsx)(Gt, {
					style: { marginTop: "12px", padding: "8px 4px" },
					children: Object(r.jsx)(We, {
						gap: "sm",
						justify: "center",
						style: { alignItems: "center", textAlign: "center" },
						children: Object(r.jsxs)(s.v, {
							style: { lineHeight: "145.23%" },
							fontSize: "14px",
							children: [
								"There is a better price for this trade on",
								" ",
								Object(r.jsx)(mn, {
									to: c,
									children: Object(r.jsxs)("b", {
										children: ["Uniswap ", n.toUpperCase(), " \u2197"],
									}),
								}),
							],
						}),
					}),
				});
			}
			function Zd(e) {
				var n,
					t,
					a,
					i,
					c,
					o = e.price,
					u = e.showInverted,
					l = e.setShowInverted,
					d = u
						? null === o || void 0 === o
							? void 0
							: o.toSignificant(6)
						: null === o ||
						  void 0 === o ||
						  null === (n = o.invert()) ||
						  void 0 === n
						? void 0
						: n.toSignificant(6),
					b = Boolean(
						(null === o || void 0 === o ? void 0 : o.baseCurrency) &&
							(null === o || void 0 === o ? void 0 : o.quoteCurrency)
					),
					p = u
						? ""
								.concat(
									null === o ||
										void 0 === o ||
										null === (t = o.quoteCurrency) ||
										void 0 === t
										? void 0
										: t.symbol,
									" per "
								)
								.concat(
									null === o ||
										void 0 === o ||
										null === (a = o.baseCurrency) ||
										void 0 === a
										? void 0
										: a.symbol
								)
						: ""
								.concat(
									null === o ||
										void 0 === o ||
										null === (i = o.baseCurrency) ||
										void 0 === i
										? void 0
										: i.symbol,
									" per "
								)
								.concat(
									null === o ||
										void 0 === o ||
										null === (c = o.quoteCurrency) ||
										void 0 === c
										? void 0
										: c.symbol
								);
				return Object(r.jsx)(s.v, {
					fontSize: "14px",
					style: {
						justifyContent: "center",
						alignItems: "center",
						display: "flex",
					},
					children: b
						? Object(r.jsxs)(r.Fragment, {
								children: [
									null !== d && void 0 !== d ? d : "-",
									" ",
									p,
									Object(r.jsx)(As, {
										onClick: function () {
											return l(!u);
										},
										children: Object(r.jsx)(s.u, {
											width: "20px",
											color: "primary",
										}),
									}),
								],
						  })
						: "-",
				});
			}
			function $d() {
				var e = Object(u.a)(["\n  stroke: ", ";\n"]);
				return (
					($d = function () {
						return e;
					}),
					e
				);
			}
			function eb() {
				var e = Object(u.a)([
					"\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n",
				]);
				return (
					(eb = function () {
						return e;
					}),
					e
				);
			}
			function nb() {
				var e = Object(u.a)([
					"\n  background: ",
					";\n  padding: 0.75rem;\n  border-radius: 20px;\n",
				]);
				return (
					(nb = function () {
						return e;
					}),
					e
				);
			}
			var tb = l.default.div(nb(), function (e) {
					var n = e.theme;
					return Object(rn.b)(0.6, n.colors.tertiary);
				}),
				rb = l.default.div(eb()),
				ab = Object(l.default)(kr.a)($d(), function (e) {
					return e.theme.colors.failure;
				});
			function ib(e) {
				var n,
					t,
					i,
					c,
					o = e.token,
					s = Se().chainId,
					u =
						null !==
							(n =
								null === o ||
								void 0 === o ||
								null === (t = o.symbol) ||
								void 0 === t
									? void 0
									: t.toLowerCase()) && void 0 !== n
							? n
							: "",
					l =
						null !==
							(i =
								null === o ||
								void 0 === o ||
								null === (c = o.name) ||
								void 0 === c
									? void 0
									: c.toLowerCase()) && void 0 !== i
							? i
							: "",
					d = ci(),
					b = Object(a.useMemo)(
						function () {
							return (
								!(!o || !s) &&
								Object.keys(d).some(function (e) {
									var n,
										t,
										r = d[e];
									return (
										!r.equals(o) &&
										((null === (n = r.symbol) || void 0 === n
											? void 0
											: n.toLowerCase()) === u ||
											(null === (t = r.name) || void 0 === t
												? void 0
												: t.toLowerCase()) === l)
									);
								})
							);
						},
						[o, s, d, u, l]
					);
				return o
					? Object(r.jsx)(tb, {
							error: b,
							children: Object(r.jsxs)(Yn, {
								gap: "6px",
								children: [
									Object(r.jsxs)(We, {
										gap: "24px",
										children: [
											Object(r.jsx)(oc, { currency: o, size: "16px" }),
											Object(r.jsx)("div", { children: " " }),
										],
									}),
									Object(r.jsxs)(We, {
										gap: "10px",
										justify: "flex-start",
										children: [
											Object(r.jsxs)(wn, {
												children: [
													o && o.name && o.symbol && o.name !== o.symbol
														? "".concat(o.name, " (").concat(o.symbol, ")")
														: o.name || o.symbol,
													" ",
												],
											}),
											s &&
												Object(r.jsx)(yn, {
													style: { fontWeight: 400 },
													href: nt(s, o.address, "token"),
													children: Object(r.jsxs)(En, {
														title: o.address,
														children: [tt(o.address), " (View on BscScan)"],
													}),
												}),
										],
									}),
								],
							}),
					  })
					: null;
			}
			function cb(e) {
				var n = e.isOpen,
					t = e.tokens,
					i = e.onConfirm,
					c = Object(a.useState)(!1),
					o = Object(h.a)(c, 2),
					u = o[0],
					l = o[1],
					d = Object(a.useCallback)(function () {
						return l(function (e) {
							return !e;
						});
					}, []),
					b = Object(a.useCallback)(function () {
						return null;
					}, []);
				return Object(r.jsx)(ir, {
					isOpen: n,
					onDismiss: b,
					maxHeight: 90,
					children: Object(r.jsx)(rb, {
						className: "token-warning-container",
						children: Object(r.jsxs)(We, {
							gap: "lg",
							children: [
								Object(r.jsxs)(Yn, {
									gap: "6px",
									children: [
										Object(r.jsx)(ab, {}),
										Object(r.jsx)(s.v, {
											color: "failure",
											children: "Token imported",
										}),
									],
								}),
								Object(r.jsxs)(s.v, {
									children: [
										"Anyone can create an BEP20 token on BSC with ",
										Object(r.jsx)("em", { children: "any" }),
										" name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.",
									],
								}),
								Object(r.jsx)(s.v, {
									children:
										"This interface can load arbitrary tokens by token addresses. Please take extra caution and do your research when interacting with arbitrary BEP20 tokens.",
								}),
								Object(r.jsxs)(s.v, {
									children: [
										"If you purchase an arbitrary token, ",
										Object(r.jsx)("strong", {
											children: "you may be unable to sell it back.",
										}),
									],
								}),
								t.map(function (e) {
									return Object(r.jsx)(ib, { token: e }, e.address);
								}),
								Object(r.jsxs)(Fn, {
									children: [
										Object(r.jsx)("div", {
											children: Object(r.jsxs)("label", {
												style: { cursor: "pointer", userSelect: "none" },
												children: [
													Object(r.jsx)("input", {
														type: "checkbox",
														className: "understand-checkbox",
														checked: u,
														onChange: d,
													}),
													" ",
													Object(r.jsx)(s.v, {
														as: "span",
														ml: "4px",
														children: "I understand",
													}),
												],
											}),
										}),
										Object(r.jsx)(s.c, {
											disabled: !u,
											variant: "danger",
											style: { width: "140px" },
											className: "token-dismiss-button",
											onClick: function () {
												i();
											},
											children: "Continue",
										}),
									],
								}),
							],
						}),
					}),
				});
			}
			function ob() {
				var e = Object(u.a)(["\n  stroke: ", ";\n"]);
				return (
					(ob = function () {
						return e;
					}),
					e
				);
			}
			function sb() {
				var e = Object(u.a)([
					"\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n",
				]);
				return (
					(sb = function () {
						return e;
					}),
					e
				);
			}
			var ub = l.default.div(sb()),
				lb = Object(l.default)(kr.a)(ob(), function (e) {
					return e.theme.colors.failure;
				});
			function db(e) {
				var n = e.isOpen,
					t = e.transactionType,
					i = e.onConfirm,
					c = Object(a.useState)(!1),
					o = Object(h.a)(c, 2),
					u = o[0],
					l = o[1],
					d = Object(a.useCallback)(function () {
						return l(function (e) {
							return !e;
						});
					}, []),
					b = Object(a.useCallback)(function () {
						return null;
					}, []);
				return Object(r.jsx)(ir, {
					isOpen: n,
					onDismiss: b,
					maxHeight: 90,
					children: Object(r.jsx)(ub, {
						className: "token-warning-container",
						children: Object(r.jsxs)(We, {
							gap: "lg",
							children: [
								Object(r.jsxs)(Yn, {
									gap: "6px",
									children: [
										Object(r.jsx)(lb, {}),
										Object(r.jsx)(wn, {
											color: "failure",
											children: "Syrup Warning",
										}),
									],
								}),
								"" !== t &&
									Object(r.jsxs)(r.Fragment, {
										children: [
											Object(r.jsxs)(kn, {
												color: "failure",
												children: [
													"Please be careful when ",
													Object(r.jsx)("strong", { children: t }),
													" SYRUP.",
												],
											}),
											Object(r.jsx)(kn, {
												color: "failure",
												children:
													"Buying" === t
														? "You will not receive CAKE rewards for holding purchased SYRUP."
														: "You will need to buy back the same amount of SYRUP to be able to convert back to CAKE.",
											}),
										],
									}),
								Object(r.jsxs)(Fn, {
									children: [
										Object(r.jsx)("div", {
											children: Object(r.jsxs)("label", {
												style: { cursor: "pointer", userSelect: "none" },
												children: [
													Object(r.jsx)("input", {
														type: "checkbox",
														className: "understand-checkbox",
														checked: u,
														onChange: d,
													}),
													" ",
													Object(r.jsx)(s.v, {
														as: "span",
														children: "I understand",
													}),
												],
											}),
										}),
										Object(r.jsx)(s.c, {
											disabled: !u,
											variant: "danger",
											style: { width: "140px" },
											onClick: function () {
												l(!1), i();
											},
											children: "Continue",
										}),
									],
								}),
							],
						}),
					}),
				});
			}
			function bb() {
				var e = Object(u.a)([
					"\n  width: 100%;\n  height: 2px;\n  background-color: ;\n  background: linear-gradient(\n    90deg,\n    ",
					" 0%,\n    ",
					" 80%\n  );\n  opacity: 0.6;\n",
				]);
				return (
					(bb = function () {
						return e;
					}),
					e
				);
			}
			function pb() {
				var e = Object(u.a)([
					"\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n",
				]);
				return (
					(pb = function () {
						return e;
					}),
					e
				);
			}
			function fb() {
				var e = Object(u.a)([
					"\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ",
					";\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n  color: ",
					";\n",
				]);
				return (
					(fb = function () {
						return e;
					}),
					e
				);
			}
			function jb() {
				var e = Object(u.a)(["\n  width: 50%;\n"]);
				return (
					(jb = function () {
						return e;
					}),
					e
				);
			}
			function mb() {
				var e = Object(u.a)(["\n  margin-top: 1.25rem;\n"]);
				return (
					(mb = function () {
						return e;
					}),
					e
				);
			}
			var hb,
				yb,
				vb = Object(l.default)(We)(mb()),
				Ob = Object(l.default)(Fn)(jb()),
				xb = l.default.div(
					fb(),
					function (e) {
						var n = e.theme,
							t = e.confirmed;
						return e.disabled
							? n.colors.backgroundDisabled
							: t
							? n.colors.success
							: n.colors.primary;
					},
					function (e) {
						var n = e.theme,
							t = e.confirmed;
						return e.disabled
							? n.colors.text
							: t
							? n.colors.success
							: "#FFFFFF";
					}
				),
				gb = l.default.div(pb()),
				wb = l.default.div(
					bb(),
					function (e) {
						var n = e.theme,
							t = e.prevConfirmed;
						return Object(rn.b)(0.5, t ? n.colors.success : n.colors.primary);
					},
					function (e) {
						var n = e.theme;
						return e.prevConfirmed
							? n.colors.primary
							: n.colors.backgroundDisabled;
					}
				);
			function Cb(e) {
				var n = e.steps;
				return Object(r.jsx)(vb, {
					justify: "center",
					children: Object(r.jsxs)(Ob, {
						children: [
							n.map(function (e, t) {
								return Object(r.jsxs)(
									gb,
									{
										children: [
											Object(r.jsx)(xb, {
												confirmed: e,
												disabled: !n[t - 1] && 0 !== t,
												children: e ? "\u2713" : t + 1,
											}),
											Object(r.jsx)(wb, { prevConfirmed: e }),
										],
									},
									t
								);
							}),
							Object(r.jsx)(xb, {
								disabled: !n[n.length - 1],
								children: n.length + 1,
							}),
						],
					}),
				});
			}
			function kb(e) {
				return "0x".concat(e.raw.toString(16));
			}
			function Tb(e, n) {
				if (tu(e) !== Ks.v1) throw new Error("invalid trade version");
				if (e.route.pairs.length > 2) throw new Error("too many pairs");
				var t = e.tradeType === U.o.EXACT_INPUT,
					r = e.inputAmount.currency === U.d,
					a = e.outputAmount.currency === U.d;
				if (r && a) throw new Error("ETHER to ETHER");
				var i,
					c = kb(e.minimumAmountOut(n.allowedSlippage)),
					o = kb(e.maximumAmountIn(n.allowedSlippage)),
					s =
						((i = n.ttl),
						"0x".concat(
							(Math.floor(new Date().getTime() / 1e3) + i).toString(16)
						));
				if (t) {
					if (r)
						return {
							methodName: "ethToTokenTransferInput",
							args: [c, s, n.recipient],
							value: o,
						};
					if (a)
						return {
							methodName: "tokenToEthTransferInput",
							args: [o, c, s, n.recipient],
							value: "0x0",
						};
					var u = e.outputAmount.currency;
					if (!(u instanceof U.l)) throw new Error("token to token");
					return {
						methodName: "tokenToTokenTransferInput",
						args: [o, c, "0x1", s, n.recipient, u.address],
						value: "0x0",
					};
				}
				if (r)
					return {
						methodName: "ethToTokenTransferOutput",
						args: [c, s, n.recipient],
						value: o,
					};
				if (a)
					return {
						methodName: "tokenToEthTransferOutput",
						args: [c, o, s, n.recipient],
						value: "0x0",
					};
				var l = e.outputAmount.currency;
				if (!(l instanceof U.l))
					throw new Error("invalid output amount currency");
				return {
					methodName: "tokenToTokenTransferOutput",
					args: [c, o, Ws.a.toHexString(), s, n.recipient, l.address],
					value: "0x0",
				};
			}
			function Ib(e) {
				var n =
						arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Oe,
					t =
						arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xe,
					r = arguments.length > 3 ? arguments[3] : void 0,
					i = Se(),
					c = i.account,
					o = i.chainId,
					s = i.library,
					u = Bu(r),
					l = u.address,
					d = null === r ? c : l,
					b = ni(ru(e), !0);
				return Object(a.useMemo)(
					function () {
						var r = tu(e);
						if (!e || !d || !s || !c || !r || !o) return [];
						var a = r === Ks.v2 ? ct(0, s, c) : b;
						if (!a) return [];
						var i = [];
						switch (r) {
							case Ks.v2:
								i.push(
									U.k.swapCallParameters(e, {
										feeOnTransfer: !1,
										allowedSlippage: new U.h(U.f.BigInt(n), we),
										recipient: d,
										ttl: t,
									})
								),
									e.tradeType === U.o.EXACT_INPUT &&
										i.push(
											U.k.swapCallParameters(e, {
												feeOnTransfer: !0,
												allowedSlippage: new U.h(U.f.BigInt(n), we),
												recipient: d,
												ttl: t,
											})
										);
								break;
							case Ks.v1:
								i.push(
									Tb(e, {
										allowedSlippage: new U.h(U.f.BigInt(n), we),
										recipient: d,
										ttl: t,
									})
								);
						}
						return i.map(function (e) {
							return { parameters: e, contract: a };
						});
					},
					[c, n, o, t, s, d, e, b]
				);
			}
			!(function (e) {
				(e[(e.INVALID = 0)] = "INVALID"),
					(e[(e.LOADING = 1)] = "LOADING"),
					(e[(e.VALID = 2)] = "VALID");
			})(hb || (hb = {})),
				(function (e) {
					(e[(e.NOT_APPLICABLE = 0)] = "NOT_APPLICABLE"),
						(e[(e.WRAP = 1)] = "WRAP"),
						(e[(e.UNWRAP = 2)] = "UNWRAP");
				})(yb || (yb = {}));
			var Eb = { wrapType: yb.NOT_APPLICABLE };
			function Nb(e, n, t) {
				var r = Se(),
					i = r.chainId,
					c = r.account,
					o = (function (e) {
						var n = Se().chainId;
						return $a(n ? U.p[n].address : void 0, Ka, e);
					})(),
					s = mi(null !== c && void 0 !== c ? c : void 0, e),
					u = Object(a.useMemo)(
						function () {
							return Du(t, e);
						},
						[e, t]
					),
					l = hu();
				return Object(a.useMemo)(
					function () {
						if (!o || !i || !e || !n) return Eb;
						var t = u && s && !s.lessThan(u);
						return e === U.d && Object(U.q)(U.p[i], n)
							? {
									wrapType: yb.WRAP,
									execute:
										t && u
											? Object(m.a)(
													j.a.mark(function e() {
														var n;
														return j.a.wrap(
															function (e) {
																for (;;)
																	switch ((e.prev = e.next)) {
																		case 0:
																			return (
																				(e.prev = 0),
																				(e.next = 3),
																				o.deposit({
																					value: "0x".concat(
																						u.raw.toString(16)
																					),
																				})
																			);
																		case 3:
																			(n = e.sent),
																				l(n, {
																					summary: "Wrap ".concat(
																						u.toSignificant(6),
																						" BNB to WBNB"
																					),
																				}),
																				(e.next = 10);
																			break;
																		case 7:
																			(e.prev = 7),
																				(e.t0 = e.catch(0)),
																				console.error(
																					"Could not deposit",
																					e.t0
																				);
																		case 10:
																		case "end":
																			return e.stop();
																	}
															},
															e,
															null,
															[[0, 7]]
														);
													})
											  )
											: void 0,
									inputError: t ? void 0 : "Insufficient ETH balance",
							  }
							: Object(U.q)(U.p[i], e) && n === U.d
							? {
									wrapType: yb.UNWRAP,
									execute:
										t && u
											? Object(m.a)(
													j.a.mark(function e() {
														var n;
														return j.a.wrap(
															function (e) {
																for (;;)
																	switch ((e.prev = e.next)) {
																		case 0:
																			return (
																				(e.prev = 0),
																				(e.next = 3),
																				o.withdraw(
																					"0x".concat(u.raw.toString(16))
																				)
																			);
																		case 3:
																			(n = e.sent),
																				l(n, {
																					summary: "Unwrap ".concat(
																						u.toSignificant(6),
																						" WBNB to BNB"
																					),
																				}),
																				(e.next = 10);
																			break;
																		case 7:
																			(e.prev = 7),
																				(e.t0 = e.catch(0)),
																				console.error(
																					"Could not withdraw",
																					e.t0
																				);
																		case 10:
																		case "end":
																			return e.stop();
																	}
															},
															e,
															null,
															[[0, 7]]
														);
													})
											  )
											: void 0,
									inputError: t ? void 0 : "Insufficient WBNB balance",
							  }
							: Eb;
					},
					[o, i, e, n, u, s, l]
				);
			}
			var Ab = function () {
				var e,
					n,
					t,
					i,
					c,
					o,
					u,
					d,
					b,
					p,
					f,
					y = (function () {
						var e = Se().chainId,
							n = Object(De.c)(),
							t = Qs(),
							r = Object(a.useState)(),
							i = Object(h.a)(r, 2),
							c = i[0],
							o = i[1];
						return (
							Object(a.useEffect)(
								function () {
									if (e) {
										var r = Hu(t);
										n(
											du({
												typedValue: r.typedValue,
												field: r.independentField,
												inputCurrencyId: r[au.INPUT].currencyId,
												outputCurrencyId: r[au.OUTPUT].currencyId,
												recipient: r.recipient,
											})
										),
											o({
												inputCurrencyId: r[au.INPUT].currencyId,
												outputCurrencyId: r[au.OUTPUT].currencyId,
											});
									}
								},
								[n, e]
							),
							c
						);
					})(),
					v = [
						li(null === y || void 0 === y ? void 0 : y.inputCurrencyId),
						li(null === y || void 0 === y ? void 0 : y.outputCurrencyId),
					],
					O = v[0],
					x = v[1],
					g = Object(a.useState)(!1),
					C = Object(h.a)(g, 2),
					k = C[0],
					T = C[1],
					I = Object(a.useState)(!1),
					E = Object(h.a)(I, 2),
					N = E[0],
					A = E[1],
					S = Object(a.useState)(""),
					R = Object(h.a)(S, 2),
					B = R[0],
					P = R[1],
					_ = Object(a.useMemo)(
						function () {
							var e, n;
							return null !==
								(e =
									null === (n = [O, x]) || void 0 === n
										? void 0
										: n.filter(function (e) {
												return e instanceof U.l;
										  })) && void 0 !== e
								? e
								: [];
						},
						[O, x]
					),
					M = Object(a.useCallback)(function () {
						T(!0);
					}, []),
					D = Object(a.useCallback)(function () {
						A(!1), P("");
					}, []),
					L = Se().account,
					F = Object(a.useContext)(l.ThemeContext),
					z = (function () {
						var e = Object(De.c)(),
							n = Ua(),
							t = Object(a.useCallback)(
								function () {
									e(xa({ userExpertMode: !n }));
								},
								[n, e]
							);
						return [n, t];
					})(),
					Y = Object(h.a)(z, 1)[0],
					q = Pa(),
					H = Object(h.a)(q, 1)[0],
					W = Ba(),
					K = Object(h.a)(W, 1)[0],
					G = Mu(),
					Q = G.independentField,
					J = G.typedValue,
					X = G.recipient,
					Z = zu(),
					$ = Z.v1Trade,
					ee = Z.v2Trade,
					ne = Z.currencyBalances,
					te = Z.parsedAmount,
					re = Z.currencies,
					ae = Z.inputError,
					ie = Nb(re[au.INPUT], re[au.OUTPUT], J),
					ce = ie.wrapType,
					ue = ie.execute,
					le = ie.inputError,
					de = ce !== yb.NOT_APPLICABLE,
					be = Xs(),
					pe = de
						? void 0
						: ((e = {}),
						  Object(w.a)(e, Ks.v1, $),
						  Object(w.a)(e, Ks.v2, ee),
						  e)[be],
					fe =
						be === Ks.v2 && ou(ee, $, Ae)
							? Ks.v1
							: be === Ks.v1 && ou($, ee)
							? Ks.v2
							: void 0,
					je = de
						? ((n = {}),
						  Object(w.a)(n, au.INPUT, te),
						  Object(w.a)(n, au.OUTPUT, te),
						  n)
						: ((t = {}),
						  Object(w.a)(
								t,
								au.INPUT,
								Q === au.INPUT
									? te
									: null === pe || void 0 === pe
									? void 0
									: pe.inputAmount
						  ),
						  Object(w.a)(
								t,
								au.OUTPUT,
								Q === au.OUTPUT
									? te
									: null === pe || void 0 === pe
									? void 0
									: pe.outputAmount
						  ),
						  t),
					me = (function () {
						var e = Object(De.c)(),
							n = Object(a.useCallback)(
								function (n, t) {
									e(
										su({
											field: n,
											currencyId:
												t instanceof U.l ? t.address : t === U.d ? "ETH" : "",
										})
									);
								},
								[e]
							);
						return {
							onSwitchTokens: Object(a.useCallback)(
								function () {
									e(uu());
								},
								[e]
							),
							onCurrencySelection: n,
							onUserInput: Object(a.useCallback)(
								function (n, t) {
									e(lu({ field: n, typedValue: t }));
								},
								[e]
							),
							onChangeRecipient: Object(a.useCallback)(
								function (n) {
									e(bu({ recipient: n }));
								},
								[e]
							),
						};
					})(),
					he = me.onSwitchTokens,
					ye = me.onCurrencySelection,
					ve = me.onUserInput,
					ge = me.onChangeRecipient,
					we = !ae,
					Ce = Q === au.INPUT ? au.OUTPUT : au.INPUT,
					ke = Object(a.useCallback)(
						function (e) {
							ve(au.INPUT, e);
						},
						[ve]
					),
					Ee = Object(a.useCallback)(
						function (e) {
							ve(au.OUTPUT, e);
						},
						[ve]
					),
					Ne = Object(a.useState)({
						showConfirm: !1,
						tradeToConfirm: void 0,
						attemptingTxn: !1,
						swapErrorMessage: void 0,
						txHash: void 0,
					}),
					Re = Object(h.a)(Ne, 2),
					Ue = Re[0],
					Be = Ue.showConfirm,
					Pe = Ue.tradeToConfirm,
					_e = Ue.swapErrorMessage,
					Me = Ue.attemptingTxn,
					Le = Ue.txHash,
					Fe = Re[1],
					ze =
						((d = {}),
						Object(w.a)(d, Q, J),
						Object(w.a)(
							d,
							Ce,
							de
								? null !==
										(i =
											null === (c = je[Q]) || void 0 === c
												? void 0
												: c.toExact()) && void 0 !== i
									? i
									: ""
								: null !==
										(o =
											null === (u = je[Ce]) || void 0 === u
												? void 0
												: u.toSignificant(6)) && void 0 !== o
								? o
								: ""
						),
						d),
					Ye = null === pe || void 0 === pe ? void 0 : pe.route,
					qe = Boolean(
						re[au.INPUT] &&
							re[au.OUTPUT] &&
							(null === (b = je[Q]) || void 0 === b
								? void 0
								: b.greaterThan(U.f.BigInt(0)))
					),
					Ve = !Ye,
					He = (function (e) {
						var n =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: 0,
							t = Object(a.useMemo)(
								function () {
									return e ? Iu(e, n)[au.INPUT] : void 0;
								},
								[e, n]
							),
							r = tu(e) === Ks.v1,
							i = ru(e);
						return Au(t, r ? i : se);
					})(pe, K),
					Ke = Object(h.a)(He, 2),
					Ge = Ke[0],
					Qe = Ke[1],
					Je = Object(a.useState)(!1),
					Xe = Object(h.a)(Je, 2),
					Ze = Xe[0],
					$e = Xe[1];
				Object(a.useEffect)(
					function () {
						Ge === xu.PENDING && $e(!0);
					},
					[Ge, Ze]
				);
				var en = Gu(ne[au.INPUT]),
					nn = Boolean(
						en &&
							(null === (p = je[au.INPUT]) || void 0 === p
								? void 0
								: p.equalTo(en))
					),
					tn = (function (e) {
						var n =
								arguments.length > 1 && void 0 !== arguments[1]
									? arguments[1]
									: Oe,
							t =
								arguments.length > 2 && void 0 !== arguments[2]
									? arguments[2]
									: xe,
							r = arguments.length > 3 ? arguments[3] : void 0,
							i = Se(),
							c = i.account,
							o = i.chainId,
							s = i.library,
							u = Ib(e, n, t, r),
							l = hu(),
							d = Bu(r).address,
							b = null === r ? c : d;
						return Object(a.useMemo)(
							function () {
								if (!e || !s || !c || !o)
									return {
										state: hb.INVALID,
										callback: null,
										error: "Missing dependencies",
									};
								if (!b)
									return null !== r
										? {
												state: hb.INVALID,
												callback: null,
												error: "Invalid recipient",
										  }
										: { state: hb.LOADING, callback: null, error: null };
								var n = tu(e);
								return {
									state: hb.VALID,
									callback: (function () {
										var t = Object(m.a)(
											j.a.mark(function t() {
												var a, i, o, s, d, p, f, m, h, y;
												return j.a.wrap(function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (
																	(t.next = 2),
																	Promise.all(
																		u.map(function (e) {
																			var n,
																				t = e.parameters,
																				r = t.methodName,
																				a = t.args,
																				i = t.value,
																				c = e.contract,
																				o = !i || Ni(i) ? {} : { value: i };
																			return (n = c.estimateGas)[r]
																				.apply(n, Object(oe.a)(a).concat([o]))
																				.then(function (n) {
																					return { call: e, gasEstimate: n };
																				})
																				.catch(function (n) {
																					var t;
																					return (
																						console.debug(
																							"Gas estimate failed, trying eth_call to extract error",
																							e
																						),
																						(t = c.callStatic)[r]
																							.apply(
																								t,
																								Object(oe.a)(a).concat([o])
																							)
																							.then(function (t) {
																								return (
																									console.debug(
																										"Unexpected successful call after failed estimate gas",
																										e,
																										n,
																										t
																									),
																									{
																										call: e,
																										error: new Error(
																											"Unexpected issue with estimating the gas. Please try again."
																										),
																									}
																								);
																							})
																							.catch(function (n) {
																								var t;
																								switch (
																									(console.debug(
																										"Call threw error",
																										e,
																										n
																									),
																									n.reason)
																								) {
																									case "UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT":
																									case "UniswapV2Router: EXCESSIVE_INPUT_AMOUNT":
																										t =
																											"This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.";
																										break;
																									default:
																										t = "The transaction cannot succeed due to error: ".concat(
																											n.reason,
																											". This is probably an issue with one of the tokens you are swapping."
																										);
																								}
																								return {
																									call: e,
																									error: new Error(t),
																								};
																							})
																					);
																				});
																		})
																	)
																);
															case 2:
																if (
																	((a = t.sent),
																	(i = a.find(function (e, n, t) {
																		return (
																			"gasEstimate" in e &&
																			(n === t.length - 1 ||
																				"gasEstimate" in t[n + 1])
																		);
																	})))
																) {
																	t.next = 9;
																	break;
																}
																if (
																	!(
																		(o = a.filter(function (e) {
																			return "error" in e;
																		})).length > 0
																	)
																) {
																	t.next = 8;
																	break;
																}
																throw o[o.length - 1].error;
															case 8:
																throw new Error(
																	"Unexpected error. Please contact support: none of the calls threw an error"
																);
															case 9:
																return (
																	(s = i.call),
																	(d = s.contract),
																	(p = s.parameters),
																	(f = p.methodName),
																	(m = p.args),
																	(h = p.value),
																	(y = i.gasEstimate),
																	t.abrupt(
																		"return",
																		d[f]
																			.apply(
																				d,
																				Object(oe.a)(m).concat([
																					Object(V.a)(
																						{ gasLimit: rt(y) },
																						h && !Ni(h)
																							? { value: h, from: c }
																							: { from: c }
																					),
																				])
																			)
																			.then(function (t) {
																				var a = e.inputAmount.currency.symbol,
																					i = e.outputAmount.currency.symbol,
																					o = e.inputAmount.toSignificant(3),
																					s = e.outputAmount.toSignificant(3),
																					u = "Swap "
																						.concat(o, " ")
																						.concat(a, " for ")
																						.concat(s, " ")
																						.concat(i),
																					d =
																						b === c
																							? u
																							: ""
																									.concat(u, " to ")
																									.concat(
																										r && $n(r) ? tt(r) : r
																									),
																					p =
																						n === Ks.v2
																							? d
																							: ""
																									.concat(d, " on ")
																									.concat(n.toUpperCase());
																				return l(t, { summary: p }), t.hash;
																			})
																			.catch(function (e) {
																				throw 4001 ===
																					(null === e || void 0 === e
																						? void 0
																						: e.code)
																					? new Error("Transaction rejected.")
																					: (console.error(
																							"Swap failed",
																							e,
																							f,
																							m,
																							h
																					  ),
																					  new Error(
																							"Swap failed: ".concat(e.message)
																					  ));
																			})
																	)
																);
															case 11:
															case "end":
																return t.stop();
														}
												}, t);
											})
										);
										return function () {
											return t.apply(this, arguments);
										};
									})(),
									error: null,
								};
							},
							[e, s, c, o, b, r, u, l]
						);
					})(pe, K, H, X),
					rn = tn.callback,
					an = tn.error,
					cn = Tu(pe).priceImpactWithoutFee,
					on = Object(a.useCallback)(
						function () {
							(cn &&
								!(function (e) {
									return e.lessThan(Ie)
										? !!e.lessThan(Te) ||
												window.confirm(
													"This swap has a price impact of at least ".concat(
														Te.toFixed(0),
														"%. Please confirm that you would like to continue with this swap."
													)
												)
										: "confirm" ===
												window.prompt(
													"This swap has a price impact of at least ".concat(
														Ie.toFixed(0),
														'%. Please type the word "confirm" to continue with this swap.'
													)
												);
								})(cn)) ||
								(rn &&
									(Fe(function (e) {
										return Object(V.a)(
											Object(V.a)({}, e),
											{},
											{
												attemptingTxn: !0,
												swapErrorMessage: void 0,
												txHash: void 0,
											}
										);
									}),
									rn()
										.then(function (e) {
											Fe(function (n) {
												return Object(V.a)(
													Object(V.a)({}, n),
													{},
													{
														attemptingTxn: !1,
														swapErrorMessage: void 0,
														txHash: e,
													}
												);
											});
										})
										.catch(function (e) {
											Fe(function (n) {
												return Object(V.a)(
													Object(V.a)({}, n),
													{},
													{
														attemptingTxn: !1,
														swapErrorMessage: e.message,
														txHash: void 0,
													}
												);
											});
										})));
						},
						[cn, rn, Fe]
					),
					sn = Object(a.useState)(!1),
					un = Object(h.a)(sn, 2),
					ln = un[0],
					dn = un[1],
					bn = Eu(cn),
					pn =
						!ae &&
						(Ge === xu.NOT_APPROVED ||
							Ge === xu.PENDING ||
							(Ze && Ge === xu.APPROVED)) &&
						!(bn > 3 && !Y),
					fn = Object(a.useCallback)(
						function () {
							Fe(function (e) {
								return Object(V.a)(Object(V.a)({}, e), {}, { showConfirm: !1 });
							}),
								Le && ve(au.INPUT, "");
						},
						[ve, Le, Fe]
					),
					mn = Object(a.useCallback)(
						function () {
							Fe(function (e) {
								return Object(V.a)(
									Object(V.a)({}, e),
									{},
									{ tradeToConfirm: pe }
								);
							});
						},
						[pe]
					),
					hn = Object(a.useCallback)(
						function (e, n) {
							"syrup" === e && (A(!0), P(n));
						},
						[A, P]
					),
					yn = Object(a.useCallback)(
						function (e) {
							$e(!1),
								ye(au.INPUT, e),
								"syrup" === e.symbol.toLowerCase() &&
									hn(e.symbol.toLowerCase(), "Selling");
						},
						[ye, $e, hn]
					),
					vn = Object(a.useCallback)(
						function () {
							en && ve(au.INPUT, en.toExact());
						},
						[en, ve]
					),
					On = Object(a.useCallback)(
						function (e) {
							ye(au.OUTPUT, e),
								"syrup" === e.symbol.toLowerCase() &&
									hn(e.symbol.toLowerCase(), "Buying");
						},
						[ye, hn]
					);
				return Object(r.jsxs)(r.Fragment, {
					children: [
						Object(r.jsx)(cb, {
							isOpen: _.length > 0 && !k,
							tokens: _,
							onConfirm: M,
						}),
						Object(r.jsx)(db, { isOpen: N, transactionType: B, onConfirm: D }),
						Object(r.jsx)(Dr, {}),
						Object(r.jsx)(Xu, {
							children: Object(r.jsxs)(ks, {
								id: "swap-page",
								children: [
									Object(r.jsx)(qd, {
										isOpen: Be,
										trade: pe,
										originalTrade: Pe,
										onAcceptChanges: mn,
										attemptingTxn: Me,
										txHash: Le,
										recipient: X,
										allowedSlippage: K,
										onConfirm: on,
										swapErrorMessage: _e,
										onDismiss: fn,
									}),
									Object(r.jsx)(ud, {
										title: "Exchange",
										description: "Trade tokens in an instant",
									}),
									Object(r.jsxs)(s.g, {
										children: [
											Object(r.jsxs)(We, {
												gap: "md",
												children: [
													Object(r.jsx)(Go, {
														label:
															Q === au.OUTPUT && !de && pe
																? "From (estimated)"
																: Rr(76, "From"),
														value: ze[au.INPUT],
														showMaxButton: !nn,
														currency: re[au.INPUT],
														onUserInput: ke,
														onMax: vn,
														onCurrencySelect: yn,
														otherCurrency: re[au.OUTPUT],
														id: "swap-currency-input",
													}),
													Object(r.jsx)(We, {
														justify: "space-between",
														children: Object(r.jsxs)(Yn, {
															justify: Y ? "space-between" : "center",
															style: { padding: "0 1rem" },
															children: [
																Object(r.jsx)(Ts, {
																	clickable: !0,
																	children: Object(r.jsx)(s.n, {
																		variant: "tertiary",
																		onClick: function () {
																			$e(!1), he();
																		},
																		style: { borderRadius: "50%" },
																		size: "sm",
																		children: Object(r.jsx)(s.b, {
																			color: "primary",
																			width: "24px",
																		}),
																	}),
																}),
																null === X && !de && Y
																	? Object(r.jsx)(jn, {
																			id: "add-recipient-button",
																			onClick: function () {
																				return ge("");
																			},
																			children: "+ Add a send (optional)",
																	  })
																	: null,
															],
														}),
													}),
													Object(r.jsx)(Go, {
														value: ze[au.OUTPUT],
														onUserInput: Ee,
														label:
															Q === au.INPUT && !de && pe
																? "To (estimated)"
																: Rr(80, "To"),
														showMaxButton: !1,
														currency: re[au.OUTPUT],
														onCurrencySelect: On,
														otherCurrency: re[au.INPUT],
														id: "swap-currency-output",
													}),
													null === X || de
														? null
														: Object(r.jsxs)(r.Fragment, {
																children: [
																	Object(r.jsxs)(Yn, {
																		justify: "space-between",
																		style: { padding: "0 1rem" },
																		children: [
																			Object(r.jsx)(Ts, {
																				clickable: !1,
																				children: Object(r.jsx)(fd.a, {
																					size: "16",
																					color: F.colors.textSubtle,
																				}),
																			}),
																			Object(r.jsx)(jn, {
																				id: "remove-recipient-button",
																				onClick: function () {
																					return ge(null);
																				},
																				children: "- Remove send",
																			}),
																		],
																	}),
																	Object(r.jsx)(_d, {
																		id: "recipient",
																		value: X,
																		onChange: ge,
																	}),
																],
														  }),
													de
														? null
														: Object(r.jsx)(Ht, {
																padding: ".25rem .75rem 0 .75rem",
																borderRadius: "20px",
																children: Object(r.jsxs)(We, {
																	gap: "4px",
																	children: [
																		Boolean(pe) &&
																			Object(r.jsxs)(Fn, {
																				align: "center",
																				children: [
																					Object(r.jsx)(s.v, {
																						fontSize: "14px",
																						children: "Price",
																					}),
																					Object(r.jsx)(Zd, {
																						price:
																							null === pe || void 0 === pe
																								? void 0
																								: pe.executionPrice,
																						showInverted: ln,
																						setShowInverted: dn,
																					}),
																				],
																			}),
																		K !== Oe &&
																			Object(r.jsxs)(Fn, {
																				align: "center",
																				children: [
																					Object(r.jsx)(s.v, {
																						fontSize: "14px",
																						children: "Slippage Tolerance",
																					}),
																					Object(r.jsxs)(s.v, {
																						fontSize: "14px",
																						children: [K / 100, "%"],
																					}),
																				],
																			}),
																	],
																}),
														  }),
												],
											}),
											Object(r.jsxs)(Es, {
												children: [
													L
														? de
															? Object(r.jsx)(s.c, {
																	disabled: Boolean(le),
																	onClick: ue,
																	fullWidth: !0,
																	children:
																		null !== le && void 0 !== le
																			? le
																			: ce === yb.WRAP
																			? "Wrap"
																			: ce === yb.UNWRAP
																			? "Unwrap"
																			: null,
															  })
															: Ve && qe
															? Object(r.jsx)(Kt, {
																	style: { textAlign: "center" },
																	children: Object(r.jsx)(wn, {
																		mb: "4px",
																		children:
																			"Insufficient liquidity for this trade.",
																	}),
															  })
															: pn
															? Object(r.jsxs)(Fn, {
																	children: [
																		Object(r.jsx)(s.c, {
																			onClick: Qe,
																			disabled: Ge !== xu.NOT_APPROVED || Ze,
																			style: { width: "48%" },
																			variant:
																				Ge === xu.APPROVED
																					? "success"
																					: "primary",
																			children:
																				Ge === xu.PENDING
																					? Object(r.jsxs)(Yn, {
																							gap: "6px",
																							justify: "center",
																							children: [
																								"Approving ",
																								Object(r.jsx)(St, {
																									stroke: "white",
																								}),
																							],
																					  })
																					: Ze && Ge === xu.APPROVED
																					? "Approved"
																					: "Approve " +
																					  (null === (f = re[au.INPUT]) ||
																					  void 0 === f
																							? void 0
																							: f.symbol),
																		}),
																		Object(r.jsx)(s.c, {
																			onClick: function () {
																				Y
																					? on()
																					: Fe({
																							tradeToConfirm: pe,
																							attemptingTxn: !1,
																							swapErrorMessage: void 0,
																							showConfirm: !0,
																							txHash: void 0,
																					  });
																			},
																			style: { width: "48%" },
																			id: "swap-button",
																			disabled:
																				!we ||
																				Ge !== xu.APPROVED ||
																				(bn > 3 && !Y),
																			variant:
																				we && bn > 2 ? "danger" : "primary",
																			children:
																				bn > 3 && !Y
																					? "Price Impact High"
																					: "Swap".concat(
																							bn > 2 ? " Anyway" : ""
																					  ),
																		}),
																	],
															  })
															: Object(r.jsx)(s.c, {
																	onClick: function () {
																		Y
																			? on()
																			: Fe({
																					tradeToConfirm: pe,
																					attemptingTxn: !1,
																					swapErrorMessage: void 0,
																					showConfirm: !0,
																					txHash: void 0,
																			  });
																	},
																	id: "swap-button",
																	disabled: !we || (bn > 3 && !Y) || !!an,
																	variant:
																		we && bn > 2 && !an ? "danger" : "primary",
																	fullWidth: !0,
																	children:
																		ae ||
																		(bn > 3 && !Y
																			? "Price Impact Too High"
																			: "Swap".concat(bn > 2 ? " Anyway" : "")),
															  })
														: Object(r.jsx)(ul, { fullWidth: !0 }),
													pn &&
														Object(r.jsx)(Cb, { steps: [Ge === xu.APPROVED] }),
													Y && _e ? Object(r.jsx)(Bs, { error: _e }) : null,
													fe && Object(r.jsx)(Xd, { version: fe }),
												],
											}),
										],
									}),
								],
							}),
						}),
						Object(r.jsx)(Jd, { trade: pe }),
					],
				});
			};
			function Sb(e) {
				var n = e.location;
				return Object(r.jsx)(v.a, {
					to: Object(V.a)(Object(V.a)({}, n), {}, { pathname: "/swap" }),
				});
			}
			function Rb(e) {
				var n = e.location.search,
					t = e.match.params.outputCurrency;
				return Object(r.jsx)(v.a, {
					to: Object(V.a)(
						Object(V.a)({}, e.location),
						{},
						{
							pathname: "/swap",
							search:
								n && n.length > 1
									? "".concat(n, "&outputCurrency=").concat(t)
									: "?outputCurrency=".concat(t),
						}
					),
				});
			}
			var Ub = { code: "en", language: "English" },
				Bb = [
					Ub,
					{
						code: "ar",
						language: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
					},
					{ code: "ca", language: "Catal\xe0" },
					{ code: "zh-CN", language: "\u7e41\u9ad4\u4e2d\u6587" },
					{ code: "zh-TW", language: "\u81fa\u7063\u83ef\u8a9e" },
					{ code: "cs", language: "\u010ce\u0161tina" },
					{ code: "da", language: "Dansk" },
					{ code: "de", language: "Deutsch" },
					{ code: "nl", language: "Nederlands" },
					{ code: "fil", language: "Filipino" },
					{ code: "fi", language: "Suomalainen" },
					{ code: "fr", language: "Fran\xe7ais" },
					{
						code: "el",
						language: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
					},
					{ code: "hi", language: "\u0939\u093f\u0902\u0926\u0940" },
					{ code: "hu", language: "Magyar" },
					{ code: "id", language: "Bahasa Indonesia" },
					{ code: "it", language: "Italiano" },
					{ code: "ja", language: "\u65e5\u672c\u8a9e" },
					{ code: "ko", language: "\ud55c\uad6d\uc5b4" },
					{ code: "pt-BR", language: "Portugu\xeas" },
					{ code: "ro", language: "Rom\xe2n\u0103" },
					{
						code: "ru",
						language: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
					},
					{ code: "sr", language: "\u0421\u0440\u043f\u0441\u043a\u0438" },
					{ code: "es-ES", language: "Espa\xf1ol" },
					{ code: "sv-SE", language: "Svenska" },
					{ code: "ta", language: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd" },
					{ code: "tr", language: "T\xfcrk\xe7e" },
					{
						code: "uk",
						language:
							"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
					},
					{ code: "vi", language: "Ti\u1ebfng Vi\u1ec7t" },
				],
				Pb = {
					selectedLanguage: { code: "", language: "" },
					setSelectedLanguage: function () {},
					translatedLanguage: { code: "", language: "" },
					setTranslatedLanguage: function () {},
				},
				_b = Object(a.createContext)(Pb),
				Mb = "IS_DARK",
				Db = i.a.createContext({ isDark: !1, toggleTheme: function () {} }),
				Lb = function (e) {
					var n = e.children,
						t = Object(a.useState)(function () {
							var e = localStorage.getItem(Mb);
							return !!e && JSON.parse(e);
						}),
						i = Object(h.a)(t, 2),
						c = i[0],
						o = i[1];
					return Object(r.jsx)(Db.Provider, {
						value: {
							isDark: c,
							toggleTheme: function () {
								o(function (e) {
									return localStorage.setItem(Mb, JSON.stringify(!e)), !e;
								});
							},
						},
						children: Object(r.jsx)(l.ThemeProvider, {
							theme: c ? s.w : s.x,
							children: n,
						}),
					});
				},
				Fb = function () {
					var e = Object(a.useContext)(Db);
					return {
						isDark: e.isDark,
						toggleTheme: e.toggleTheme,
						theme: Object(a.useContext)(l.ThemeContext),
					};
				},
				zb = function () {
					var e = Object(a.useState)(null),
						n = Object(h.a)(e, 2),
						t = n[0],
						r = n[1];
					return (
						Object(a.useEffect)(
							function () {
								(function () {
									var e = Object(m.a)(
										j.a.mark(function e() {
											var n, t;
											return j.a.wrap(
												function (e) {
													for (;;)
														switch ((e.prev = e.next)) {
															case 0:
																return (
																	(e.prev = 0),
																	(e.next = 3),
																	fetch(
																		"https://api.pancakeswap.com/api/v1/price"
																	)
																);
															case 3:
																return (n = e.sent), (e.next = 6), n.json();
															case 6:
																(t = e.sent), r(t), (e.next = 13);
																break;
															case 10:
																(e.prev = 10),
																	(e.t0 = e.catch(0)),
																	console.error(
																		"Unable to fetch price data:",
																		e.t0
																	);
															case 13:
															case "end":
																return e.stop();
														}
												},
												e,
												null,
												[[0, 10]]
											);
										})
									);
									return function () {
										return e.apply(this, arguments);
									};
								})()();
							},
							[r]
						),
						t
					);
				},
				Yb = [
					{ label: "Home", icon: "HomeIcon", href: "https://camelswap.finance" },
					{
						label: "Trade",
						icon: "TradeIcon",
						items: [
							{ label: "Exchange", href: "/swap" },
							{ label: "Liquidity", href: "/pool" },
						],
					},
					{
						label: "Farming",
						icon: "FarmIcon",
						href: "https://camelswap.finance/#/farms",
					},
					{
						label: "Staking",
						icon: "PoolIcon",
						href: "https://camelswap.finance/#/syrup",
					},
					{
						label: "Info",
						icon: "InfoIcon",
						items: [
							{ label: "Overview", href: "https://info.camelswap.finance" },
							{
								label: "Tokens",
								href: "https://info.camelswap.finance/#/tokens",
							},
							{ label: "Pairs", href: "https://info.camelswap.finance/#/pairs" },
							{
								label: "Accounts",
								href: "https://info.camelswap.finance/#/accounts",
							},
						],
					},
					{
						label: "More",
						icon: "MoreIcon",
						items: [
//Thierry TBC						
							{ label: "Governance", href: "https://gov.camelswap.finance" },
							{ label: "Github", href: "https://github.com/camelmaster" },
							{ label: "Blog", href: "https://kebabfinance1.medium.com" },
						],
					},
				],
				qb = function (e) {
					var n = Object(x.c)(),
						t = n.account,
						i = n.activate,
						c = n.deactivate,
						o = Object(a.useContext)(_b),
						u = o.selectedLanguage,
						l = o.setSelectedLanguage,
						d = Fb(),
						b = d.isDark,
						p = d.toggleTheme,
						f = zb(),
//Thierry TBC						
						j = f ? Number(f.prices.KEBAB) : void 0;
					return Object(r.jsx)(
						s.q,
						Object(V.a)(
							{
								links: Yb,
								account: t,
								login: function (e) {
									return i("walletconnect" === e ? ce : "bsc" === e ? ie : ae);
								},
								logout: c,
								isDark: b,
								toggleTheme: p,
								currentLang:
									(null === u || void 0 === u ? void 0 : u.code) || "",
								langs: Bb,
								setLang: l,
								cakePriceUsd: j,
							},
							e
						)
					);
				};
			function Vb() {
				var e = Object(u.a)(["\n  margin-top: 5rem;\n"]);
				return (
					(Vb = function () {
						return e;
					}),
					e
				);
			}
			function Hb() {
				var e = Object(u.a)([
					"\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 32px 16px;\n  min-height: calc(100vh - 152px);\n  align-items: center;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 1;\n\n  background-image: url('/static/media/bg.bfd323f2.png');\n  background-repeat: no-repeat;\n  background-position: top;\n  background-size: contain;\n",
				]);
				return (
					(Hb = function () {
						return e;
					}),
					e
				);
			}
			function Wb() {
				var e = Object(u.a)([
					"\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  overflow-x: hidden;\n",
				]);
				return (
					(Wb = function () {
						return e;
					}),
					e
				);
			}
			var Kb = l.default.div(Wb()),
				Gb = l.default.div(Hb()),
				Qb = l.default.div(Vb());
			function Jb() {
				var e = Object(a.useState)(void 0),
					n = Object(h.a)(e, 2),
					t = n[0],
					i = n[1],
					c = Object(a.useState)(void 0),
					o = Object(h.a)(c, 2),
					s = o[0],
					u = o[1],
					l = Object(a.useState)([]),
					d = Object(h.a)(l, 2),
					b = d[0],
					p = d[1],
					f = "".concat(
						Object({
							NODE_ENV: "production",
							PUBLIC_URL: ".",
							WDS_SOCKET_HOST: void 0,
							WDS_SOCKET_PATH: void 0,
							WDS_SOCKET_PORT: void 0,
							FAST_REFRESH: !0,
							REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io",
							REACT_APP_CHAIN_ID: "56",
							REACT_APP_GTAG: "G-1XYHJL2RMR",
						}).REACT_APP_CROWDIN_APIKEY
					),
					x = parseInt(
						"".concat(
							Object({
								NODE_ENV: "production",
								PUBLIC_URL: ".",
								WDS_SOCKET_HOST: void 0,
								WDS_SOCKET_PATH: void 0,
								WDS_SOCKET_PORT: void 0,
								FAST_REFRESH: !0,
								REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io",
								REACT_APP_CHAIN_ID: "56",
								REACT_APP_GTAG: "G-1XYHJL2RMR",
							}).REACT_APP_CROWDIN_PROJECTID
						)
					),
					g = { token: f },
					w = new O.StringTranslations(g);
				Object(a.useEffect)(function () {
					var e = localStorage.getItem("pancakeSwapLanguage");
					if (e) {
						var n = (function (e) {
							return Bb.filter(function (n) {
								return n.code === e;
							})[0];
						})(e);
						i(n);
					} else i(Ub);
				}, []);
				var C = (function () {
					var e = Object(m.a)(
						j.a.mark(function e() {
							return j.a.wrap(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											w.listLanguageTranslations(x, t.code, void 0, 6, 200)
												.then(function (e) {
													e.data.length < 1 ? p(["error"]) : p(e.data);
												})
												.then(function () {
													return u(t);
												})
												.catch(function (e) {
													p(["error"]), console.error(e);
												});
										case 1:
										case "end":
											return e.stop();
									}
							}, e);
						})
					);
					return function () {
						return e.apply(this, arguments);
					};
				})();
				return (
					Object(a.useEffect)(
						function () {
							t && C();
						},
						[t]
					),
					Object(r.jsx)(a.Suspense, {
						fallback: null,
						children: Object(r.jsx)(y.a, {
							children: Object(r.jsx)(Kb, {
								children: Object(r.jsx)(_b.Provider, {
									value: {
										selectedLanguage: t,
										setSelectedLanguage: i,
										translatedLanguage: s,
										setTranslatedLanguage: u,
									},
									children: Object(r.jsx)(Nr.Provider, {
										value: { translations: b, setTranslations: p },
										children: Object(r.jsx)(qb, {
											children: Object(r.jsxs)(Gb, {
												children: [
													Object(r.jsx)(kt, {}),
													Object(r.jsx)(_t, {
														children: Object(r.jsxs)(v.d, {
															children: [
																Object(r.jsx)(v.b, {
																	exact: !0,
																	strict: !0,
																	path: "/swap",
																	component: Ab,
																}),
																Object(r.jsx)(v.b, {
																	exact: !0,
																	strict: !0,
																	path: "/swap/:outputCurrency",
																	component: Rb,
																}),
																Object(r.jsx)(v.b, {
																	exact: !0,
																	strict: !0,
																	path: "/send",
																	component: Sb,
																}),
																Object(r.jsx)(v.b, {
																	exact: !0,
																	strict: !0,
																	path: "/find",
																	component: dd,
																}),
																Object(r.jsx)(v.b, {
																	exact: !0,
																	strict: !0,
																	path: "/pool",
																	component: ld,
																}),
																Object(r.jsx)(v.b, {
																	exact: !0,
																	strict: !0,
																	path: "/create",
																	component: dl,
																}),
																Object(r.jsx)(v.b, {
																	exact: !0,
																	path: "/add",
																	component: ll,
																}),
																Object(r.jsx)(v.b, {
																	exact: !0,
																	path: "/add/:currencyIdA",
																	component: pl,
																}),
																Object(r.jsx)(v.b, {
																	exact: !0,
																	path: "/add/:currencyIdA/:currencyIdB",
																	component: fl,
																}),
																Object(r.jsx)(v.b, {
																	exact: !0,
																	strict: !0,
																	path: "/remove/v1/:address",
																	component: Ul,
																}),
																Object(r.jsx)(v.b, {
																	exact: !0,
																	strict: !0,
																	path: "/remove/:tokens",
																	component: Id,
																}),
																Object(r.jsx)(v.b, {
																	exact: !0,
																	strict: !0,
																	path: "/remove/:currencyIdA/:currencyIdB",
																	component: kd,
																}),
																Object(r.jsx)(v.b, {
																	exact: !0,
																	strict: !0,
																	path: "/migrate/v1",
																	component: hl,
																}),
																Object(r.jsx)(v.b, {
																	exact: !0,
																	strict: !0,
																	path: "/migrate/v1/:address",
																	component: Il,
																}),
																Object(r.jsx)(v.b, { component: Sb }),
															],
														}),
													}),
													Object(r.jsx)(Qb, {}),
												],
											}),
										}),
									}),
								}),
							}),
						}),
					})
				);
			}
			var Xb = "visibilityState" in document;
			function Zb() {
				return !Xb || "hidden" !== document.visibilityState;
			}
			function $b() {
				var e = Object(a.useState)(Zb()),
					n = Object(h.a)(e, 2),
					t = n[0],
					r = n[1],
					i = Object(a.useCallback)(
						function () {
							r(Zb());
						},
						[r]
					);
				return (
					Object(a.useEffect)(
						function () {
							if (Xb)
								return (
									document.addEventListener("visibilitychange", i),
									function () {
										document.removeEventListener("visibilitychange", i);
									}
								);
						},
						[i]
					),
					t
				);
			}
			function ep() {
				var e = Se(),
					n = e.library,
					t = e.chainId,
					r = Object(De.c)(),
					i = $b(),
					c = Object(a.useState)({ chainId: t, blockNumber: null }),
					o = Object(h.a)(c, 2),
					s = o[0],
					u = o[1],
					l = Object(a.useCallback)(
						function (e) {
							u(function (n) {
								return t === n.chainId
									? "number" !== typeof n.blockNumber
										? { chainId: t, blockNumber: e }
										: { chainId: t, blockNumber: Math.max(e, n.blockNumber) }
									: n;
							});
						},
						[t, u]
					);
				Object(a.useEffect)(
					function () {
						if (n && t && i)
							return (
								u({ chainId: t, blockNumber: null }),
								n
									.getBlockNumber()
									.then(l)
									.catch(function (e) {
										return console.error(
											"Failed to get block number for chainId: ".concat(t),
											e
										);
									}),
								n.on("block", l),
								function () {
									n.removeListener("block", l);
								}
							);
					},
					[r, t, n, l, i]
				);
				var d = Uu(s, 100);
				return (
					Object(a.useEffect)(
						function () {
							d.chainId &&
								d.blockNumber &&
								i &&
								r(Ue({ chainId: d.chainId, blockNumber: d.blockNumber }));
						},
						[i, r, d.blockNumber, d.chainId]
					),
					null
				);
			}
			function np() {
				var e = Se().library,
					n = Object(De.c)(),
					t = Object(De.d)(function (e) {
						return e.lists.byUrl;
					}),
					r = $b(),
					i = so();
				return (
					Di(
						Object(a.useCallback)(
							function () {
								r &&
									Object.keys(t).forEach(function (e) {
										return i(e).catch(function (e) {
											return console.debug("interval list fetching error", e);
										});
									});
							},
							[i, r, t]
						),
						e ? 6e5 : null
					),
					Object(a.useEffect)(
						function () {
							Object.keys(t).forEach(function (e) {
								var n = t[e];
								n.current ||
									n.loadingRequestId ||
									n.error ||
									i(e).catch(function (e) {
										return console.debug("list added fetching error", e);
									});
							});
						},
						[n, i, e, t]
					),
					Object(a.useEffect)(
						function () {
							Object.keys(t).forEach(function (e) {
								var r = t[e];
								if (r.current && r.pendingUpdate) {
									var a = Object(Je.c)(
										r.current.version,
										r.pendingUpdate.version
									);
									switch (a) {
										case Je.a.NONE:
											throw new Error("unexpected no version bump");
										case Je.a.PATCH:
										case Je.a.MINOR:
											a >=
											Object(Je.d)(r.current.tokens, r.pendingUpdate.tokens)
												? (n(Ze(e)),
												  n(
														_e({
															key: e,
															content: {
																listUpdate: {
																	listUrl: e,
																	oldList: r.current,
																	newList: r.pendingUpdate,
																	auto: !0,
																},
															},
														})
												  ))
												: console.error(
														"List at url ".concat(
															e,
															" could not automatically update because the version bump was only PATCH/MINOR while the update had breaking changes and should have been MAJOR"
														)
												  );
											break;
										case Je.a.MAJOR:
											n(
												_e({
													key: e,
													content: {
														listUpdate: {
															listUrl: e,
															auto: !1,
															oldList: r.current,
															newList: r.pendingUpdate,
														},
													},
													removeAfterMs: null,
												})
											);
									}
								}
							});
						},
						[n, t]
					),
					null
				);
			}
			function tp(e, n) {
				return (
					(t = e + Math.round(Math.random() * Math.max(0, n - e))),
					new Promise(function (e) {
						return setTimeout(e, t);
					})
				);
				var t;
			}
			var rp = (function (e) {
					Object(S.a)(t, e);
					var n = Object(R.a)(t);
					function t() {
						return Object(N.a)(this, t), n.call(this, "Cancelled");
					}
					return t;
				})(Object(D.a)(Error)),
				ap = (function (e) {
					Object(S.a)(t, e);
					var n = Object(R.a)(t);
					function t() {
						return Object(N.a)(this, t), n.apply(this, arguments);
					}
					return t;
				})(Object(D.a)(Error));
			function ip() {
				return (ip = Object(m.a)(
					j.a.mark(function e(n, t, r) {
						var a, i, c, o;
						return j.a.wrap(
							function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												console.debug("Fetching chunk", n, t, r),
												(e.prev = 1),
												(e.next = 5),
												n.aggregate(
													t.map(function (e) {
														return [e.address, e.callData];
													})
												)
											);
										case 5:
											(c = e.sent),
												(o = Object(h.a)(c, 2)),
												(a = o[0]),
												(i = o[1]),
												(e.next = 15);
											break;
										case 11:
											throw (
												((e.prev = 11),
												(e.t0 = e.catch(1)),
												console.debug(
													"Failed to fetch chunk inside retry",
													e.t0
												),
												e.t0)
											);
										case 15:
											if (!(a.toNumber() < r)) {
												e.next = 18;
												break;
											}
											throw (
												(console.debug(
													"Fetched results for old block number: "
														.concat(a.toString(), " vs. ")
														.concat(r)
												),
												new ap("Fetched for old block number"))
											);
										case 18:
											return e.abrupt("return", {
												results: i,
												blockNumber: a.toNumber(),
											});
										case 19:
										case "end":
											return e.stop();
									}
							},
							e,
							null,
							[[1, 11]]
						);
					})
				)).apply(this, arguments);
			}
			function cp() {
				var e = Object(De.c)(),
					n = Object(De.d)(function (e) {
						return e.multicall;
					}),
					t = Uu(n.callListeners, 100),
					r = Le(),
					i = Se().chainId,
					c = ii(),
					o = Object(a.useRef)(),
					s = Object(a.useMemo)(
						function () {
							return (function (e, n) {
								if (!e || !n) return {};
								var t = e[n];
								return t
									? Object.keys(t).reduce(function (e, n) {
											var r = t[n];
											return (
												(e[n] = Object.keys(r)
													.filter(function (e) {
														var n = parseInt(e);
														return !(n <= 0) && r[n] > 0;
													})
													.reduce(function (e, n) {
														return Math.min(e, parseInt(n));
													}, 1 / 0)),
												e
											);
									  }, {})
									: {};
							})(t, i);
						},
						[t, i]
					),
					u = Object(a.useMemo)(
						function () {
							return (function (e, n, t, r) {
								return t && r
									? e[t]
										? Object.keys(n).filter(function (a) {
												var i = n[a],
													c = e[t][a];
												if (!c) return !0;
												var o = r - (i - 1);
												return (
													!(
														c.fetchingBlockNumber && c.fetchingBlockNumber >= o
													) &&
													(!c.blockNumber || c.blockNumber < o)
												);
										  })
										: Object.keys(n)
									: [];
							})(n.callResults, s, i, r);
						},
						[i, n.callResults, s, r]
					),
					l = Object(a.useMemo)(
						function () {
							return JSON.stringify(u.sort());
						},
						[u]
					);
				return (
					Object(a.useEffect)(
						function () {
							var n;
							if (r && i && c) {
								var t = JSON.parse(l);
								if (0 !== t.length) {
									var a,
										s,
										u = t.map(function (e) {
											return ea(e);
										}),
										d = (function (e, n) {
											if (n < 1) throw new Error("maxChunkSize must be gte 1");
											if (e.length <= n) return [e];
											var t = Math.ceil(e.length / n),
												r = Math.ceil(e.length / t);
											return Object(oe.a)(Array(t).keys()).map(function (n) {
												return e.slice(n * r, n * r + r);
											});
										})(u, 500);
									if (
										(null === (n = o.current) || void 0 === n
											? void 0
											: n.blockNumber) !== r
									)
										null === (a = o.current) ||
											void 0 === a ||
											null === (s = a.cancellations) ||
											void 0 === s ||
											s.forEach(function (e) {
												return e();
											});
									e(ra({ calls: u, chainId: i, fetchingBlockNumber: r })),
										(o.current = {
											blockNumber: r,
											cancellations: d.map(function (n, a) {
												var s = (function (e, n) {
														var t,
															r = n.n,
															a = n.minWait,
															i = n.maxWait,
															c = !1;
														return {
															promise: new Promise(
																(function () {
																	var n = Object(m.a)(
																		j.a.mark(function n(o, s) {
																			var u;
																			return j.a.wrap(
																				function (n) {
																					for (;;)
																						switch ((n.prev = n.next)) {
																							case 0:
																								t = s;
																							case 1:
																								return (
																									(u = void 0),
																									(n.prev = 3),
																									(n.next = 6),
																									e()
																								);
																							case 6:
																								return (
																									(u = n.sent),
																									c || (o(u), (c = !0)),
																									n.abrupt("break", 24)
																								);
																							case 11:
																								if (
																									((n.prev = 11),
																									(n.t0 = n.catch(3)),
																									!c)
																								) {
																									n.next = 15;
																									break;
																								}
																								return n.abrupt("break", 24);
																							case 15:
																								if (
																									!(r <= 0) &&
																									n.t0 instanceof ap
																								) {
																									n.next = 19;
																									break;
																								}
																								return (
																									s(n.t0),
																									(c = !0),
																									n.abrupt("break", 24)
																								);
																							case 19:
																								r--;
																							case 20:
																								return (n.next = 22), tp(a, i);
																							case 22:
																								n.next = 1;
																								break;
																							case 24:
																							case "end":
																								return n.stop();
																						}
																				},
																				n,
																				null,
																				[[3, 11]]
																			);
																		})
																	);
																	return function (e, t) {
																		return n.apply(this, arguments);
																	};
																})()
															),
															cancel: function () {
																c || ((c = !0), t(new rp()));
															},
														};
													})(
														function () {
															return (function (e, n, t) {
																return ip.apply(this, arguments);
															})(c, n, r);
														},
														{ n: 1 / 0, minWait: 2500, maxWait: 3500 }
													),
													u = s.cancel;
												return (
													s.promise
														.then(function (c) {
															var s = c.results,
																u = c.blockNumber;
															o.current = { cancellations: [], blockNumber: r };
															var l = d.slice(0, a).reduce(function (e, n) {
																	return e + n.length;
																}, 0),
																b = l + s.length;
															e(
																ia({
																	chainId: i,
																	results: t
																		.slice(l, b)
																		.reduce(function (e, n, t) {
																			var r;
																			return (
																				(e[n] =
																					null !== (r = s[t]) && void 0 !== r
																						? r
																						: null),
																				e
																			);
																		}, {}),
																	blockNumber: u,
																})
															),
																console.log(
																	"Success to fetch multicall chunk",
																	n,
																	i
																);
														})
														.catch(function (t) {
															t instanceof rp
																? console.debug(
																		"Cancelled fetch for blockNumber",
																		r
																  )
																: (console.error(
																		"Failed to fetch multicall chunk",
																		n,
																		i,
																		t
																  ),
																  e(
																		aa({
																			calls: n,
																			chainId: i,
																			fetchingBlockNumber: r,
																		})
																  ));
														}),
													u
												);
											}),
										});
								}
							}
						},
						[i, c, e, l, r]
					),
					null
				);
			}
			function op() {
				var e,
					n = Se(),
					t = n.chainId,
					r = n.library,
					i = Le(),
					c = Object(De.c)(),
					o = Object(De.d)(function (e) {
						return e.transactions;
					}),
					s = t && null !== (e = o[t]) && void 0 !== e ? e : {},
					u = (function () {
						var e = Object(De.c)();
						return Object(a.useCallback)(
							function (n, t) {
								e(_e({ content: n, key: t }));
							},
							[e]
						);
					})();
				return (
					Object(a.useEffect)(
						function () {
							t &&
								r &&
								i &&
								Object.keys(s)
									.filter(function (e) {
										return (function (e, n) {
											if (n.receipt) return !1;
											if (!n.lastCheckedBlockNumber) return !0;
											var t = e - n.lastCheckedBlockNumber;
											if (t < 1) return !1;
											var r = (new Date().getTime() - n.addedTime) / 1e3 / 60;
											return r > 60 ? t > 9 : !(r > 5) || t > 2;
										})(i, s[e]);
									})
									.forEach(function (e) {
										r.getTransactionReceipt(e)
											.then(function (n) {
												var r;
												n
													? (c(
															ju({
																chainId: t,
																hash: e,
																receipt: {
																	blockHash: n.blockHash,
																	blockNumber: n.blockNumber,
																	contractAddress: n.contractAddress,
																	from: n.from,
																	status: n.status,
																	to: n.to,
																	transactionHash: n.transactionHash,
																	transactionIndex: n.transactionIndex,
																},
															})
													  ),
													  u(
															{
																txn: {
																	hash: e,
																	success: 1 === n.status,
																	summary:
																		null === (r = s[e]) || void 0 === r
																			? void 0
																			: r.summary,
																},
															},
															e
													  ))
													: c(mu({ chainId: t, hash: e, blockNumber: i }));
											})
											.catch(function (n) {
												console.error(
													"failed to check transaction hash: ".concat(e),
													n
												);
											});
									});
						},
						[t, r, s, i, c, u]
					),
					null
				);
			}
			var sp = t(180),
				up = Object(Re.c)(
					{
						blockNumber: {},
						popupList: [],
						walletModalOpen: !1,
						settingsMenuOpen: !1,
					},
					function (e) {
						return e
							.addCase(Ue, function (e, n) {
								var t = n.payload,
									r = t.chainId,
									a = t.blockNumber;
								"number" !== typeof e.blockNumber[r]
									? (e.blockNumber[r] = a)
									: (e.blockNumber[r] = Math.max(a, e.blockNumber[r]));
							})
							.addCase(Be, function (e) {
								e.walletModalOpen = !e.walletModalOpen;
							})
							.addCase(Pe, function (e) {
								e.settingsMenuOpen = !e.settingsMenuOpen;
							})
							.addCase(_e, function (e, n) {
								var t = n.payload,
									r = t.content,
									a = t.key,
									i = t.removeAfterMs,
									c = void 0 === i ? 15e3 : i;
								e.popupList = (a
									? e.popupList.filter(function (e) {
											return e.key !== a;
									  })
									: e.popupList
								).concat([
									{
										key: a || Object(Re.e)(),
										show: !0,
										content: r,
										removeAfterMs: c,
									},
								]);
							})
							.addCase(Me, function (e, n) {
								var t = n.payload.key;
								e.popupList.forEach(function (e) {
									e.key === t && (e.show = !1);
								});
							});
					}
				),
				lp = Object(Re.b)("global/updateVersion"),
				dp = function () {
					return new Date().getTime();
				};
			function bp(e, n) {
				return "".concat(e, ";").concat(n);
			}
			var pp,
				fp = {
					userDarkMode: null,
					matchesDarkMode: !1,
					userExpertMode: !1,
					userSlippageTolerance: Oe,
					userDeadline: xe,
					tokens: {},
					pairs: {},
					timestamp: dp(),
					audioPlay: !0,
				},
				jp = Object(Re.c)(fp, function (e) {
					return e
						.addCase(lp, function (e) {
							"number" !== typeof e.userSlippageTolerance &&
								(e.userSlippageTolerance = Oe),
								"number" !== typeof e.userDeadline && (e.userDeadline = xe),
								(e.lastUpdateVersionTimestamp = dp());
						})
						.addCase(Oa, function (e, n) {
							(e.userDarkMode = n.payload.userDarkMode), (e.timestamp = dp());
						})
						.addCase(va, function (e, n) {
							(e.matchesDarkMode = n.payload.matchesDarkMode),
								(e.timestamp = dp());
						})
						.addCase(xa, function (e, n) {
							(e.userExpertMode = n.payload.userExpertMode),
								(e.timestamp = dp());
						})
						.addCase(ga, function (e, n) {
							(e.userSlippageTolerance = n.payload.userSlippageTolerance),
								(e.timestamp = dp());
						})
						.addCase(wa, function (e, n) {
							(e.userDeadline = n.payload.userDeadline), (e.timestamp = dp());
						})
						.addCase(Ca, function (e, n) {
							var t = n.payload.serializedToken;
							(e.tokens[t.chainId] = e.tokens[t.chainId] || {}),
								(e.tokens[t.chainId][t.address] = t),
								(e.timestamp = dp());
						})
						.addCase(ka, function (e, n) {
							var t = n.payload,
								r = t.address,
								a = t.chainId;
							(e.tokens[a] = e.tokens[a] || {}),
								delete e.tokens[a][r],
								(e.timestamp = dp());
						})
						.addCase(Ta, function (e, n) {
							var t = n.payload.serializedPair;
							if (
								t.token0.chainId === t.token1.chainId &&
								t.token0.address !== t.token1.address
							) {
								var r = t.token0.chainId;
								(e.pairs[r] = e.pairs[r] || {}),
									(e.pairs[r][bp(t.token0.address, t.token1.address)] = t);
							}
							e.timestamp = dp();
						})
						.addCase(Ia, function (e, n) {
							var t = n.payload,
								r = t.chainId,
								a = t.tokenAAddress,
								i = t.tokenBAddress;
							e.pairs[r] &&
								(delete e.pairs[r][bp(a, i)], delete e.pairs[r][bp(i, a)]),
								(e.timestamp = dp());
						})
						.addCase(Ea, function (e) {
							e.audioPlay = !1;
						})
						.addCase(Na, function (e) {
							e.audioPlay = !0;
						});
				}),
				mp = function () {
					return new Date().getTime();
				},
				hp = Object(Re.c)({}, function (e) {
					return e
						.addCase(pu, function (e, n) {
							var t,
								r,
								a = n.payload,
								i = a.chainId,
								c = a.from,
								o = a.hash,
								s = a.approval,
								u = a.summary;
							if (null === (t = e[i]) || void 0 === t ? void 0 : t[o])
								throw Error("Attempted to add existing transaction.");
							var l = null !== (r = e[i]) && void 0 !== r ? r : {};
							(l[o] = {
								hash: o,
								approval: s,
								summary: u,
								from: c,
								addedTime: mp(),
							}),
								(e[i] = l);
						})
						.addCase(fu, function (e, n) {
							var t = n.payload.chainId;
							e[t] && (e[t] = {});
						})
						.addCase(mu, function (e, n) {
							var t,
								r = n.payload,
								a = r.chainId,
								i = r.hash,
								c = r.blockNumber,
								o = null === (t = e[a]) || void 0 === t ? void 0 : t[i];
							o &&
								(o.lastCheckedBlockNumber
									? (o.lastCheckedBlockNumber = Math.max(
											c,
											o.lastCheckedBlockNumber
									  ))
									: (o.lastCheckedBlockNumber = c));
						})
						.addCase(ju, function (e, n) {
							var t,
								r = n.payload,
								a = r.hash,
								i = r.chainId,
								c = r.receipt,
								o = null === (t = e[i]) || void 0 === t ? void 0 : t[a];
							o && ((o.receipt = c), (o.confirmedTime = mp()));
						});
				}),
				yp =
					((pp = { independentField: au.INPUT, typedValue: "" }),
					Object(w.a)(pp, au.INPUT, { currencyId: "" }),
					Object(w.a)(pp, au.OUTPUT, { currencyId: "" }),
					Object(w.a)(pp, "recipient", null),
					pp),
				vp = Object(Re.c)(yp, function (e) {
					return e
						.addCase(du, function (e, n) {
							var t,
								r = n.payload,
								a = r.typedValue,
								i = r.recipient,
								c = r.field,
								o = r.inputCurrencyId,
								s = r.outputCurrencyId;
							return (
								(t = {}),
								Object(w.a)(t, au.INPUT, { currencyId: o }),
								Object(w.a)(t, au.OUTPUT, { currencyId: s }),
								Object(w.a)(t, "independentField", c),
								Object(w.a)(t, "typedValue", a),
								Object(w.a)(t, "recipient", i),
								t
							);
						})
						.addCase(su, function (e, n) {
							var t,
								r = n.payload,
								a = r.currencyId,
								i = r.field,
								c = i === au.INPUT ? au.OUTPUT : au.INPUT;
							return a === e[c].currencyId
								? Object(V.a)(
										Object(V.a)({}, e),
										{},
										((t = {
											independentField:
												e.independentField === au.INPUT ? au.OUTPUT : au.INPUT,
										}),
										Object(w.a)(t, i, { currencyId: a }),
										Object(w.a)(t, c, { currencyId: e[i].currencyId }),
										t)
								  )
								: Object(V.a)(
										Object(V.a)({}, e),
										{},
										Object(w.a)({}, i, { currencyId: a })
								  );
						})
						.addCase(uu, function (e) {
							var n;
							return Object(V.a)(
								Object(V.a)({}, e),
								{},
								((n = {
									independentField:
										e.independentField === au.INPUT ? au.OUTPUT : au.INPUT,
								}),
								Object(w.a)(n, au.INPUT, {
									currencyId: e[au.OUTPUT].currencyId,
								}),
								Object(w.a)(n, au.OUTPUT, {
									currencyId: e[au.INPUT].currencyId,
								}),
								n)
							);
						})
						.addCase(lu, function (e, n) {
							var t = n.payload,
								r = t.field,
								a = t.typedValue;
							return (
								console.log(a),
								Object(V.a)(
									Object(V.a)({}, e),
									{},
									{ independentField: r, typedValue: a }
								)
							);
						})
						.addCase(bu, function (e, n) {
							var t = n.payload.recipient;
							e.recipient = t;
						});
				}),
				Op = {
					independentField: gu.CURRENCY_A,
					typedValue: "",
					otherTypedValue: "",
				},
				xp = Object(Re.c)(Op, function (e) {
					return e
						.addCase(Ru, function () {
							return Op;
						})
						.addCase(Su, function (e, n) {
							var t = n.payload,
								r = t.field,
								a = t.typedValue;
							return t.noLiquidity
								? r === e.independentField
									? Object(V.a)(
											Object(V.a)({}, e),
											{},
											{ independentField: r, typedValue: a }
									  )
									: Object(V.a)(
											Object(V.a)({}, e),
											{},
											{
												independentField: r,
												typedValue: a,
												otherTypedValue: e.typedValue,
											}
									  )
								: Object(V.a)(
										Object(V.a)({}, e),
										{},
										{ independentField: r, typedValue: a, otherTypedValue: "" }
								  );
						});
				}),
				gp = {
					error: null,
					current: null,
					loadingRequestId: null,
					pendingUpdate: null,
				},
				wp = {
					lastInitializedDefaultListOfLists: Xc,
					byUrl: Object(V.a)(
						Object(V.a)(
							{},
							Xc.reduce(function (e, n) {
								return (e[n] = gp), e;
							}, {})
						),
						{},
						Object(w.a)({}, Jc, {
							error: null,
							current: Zc,
							loadingRequestId: null,
							pendingUpdate: null,
						})
					),
					selectedListUrl: Jc,
				},
				Cp = Object(Re.c)(wp, function (e) {
					return e
						.addCase(Xe.pending, function (e, n) {
							var t = n.payload,
								r = t.requestId,
								a = t.url;
							e.byUrl[a] = Object(V.a)(
								Object(V.a)({ current: null, pendingUpdate: null }, e.byUrl[a]),
								{},
								{ loadingRequestId: r, error: null }
							);
						})
						.addCase(Xe.fulfilled, function (e, n) {
							var t,
								r,
								a = n.payload,
								i = a.requestId,
								c = a.tokenList,
								o = a.url,
								s =
									null === (t = e.byUrl[o]) || void 0 === t
										? void 0
										: t.current,
								u =
									null === (r = e.byUrl[o]) || void 0 === r
										? void 0
										: r.loadingRequestId;
							if (s) {
								if (Object(Je.c)(s.version, c.version) === Je.a.NONE) return;
								(null !== u && u !== i) ||
									(e.byUrl[o] = Object(V.a)(
										Object(V.a)({}, e.byUrl[o]),
										{},
										{
											loadingRequestId: null,
											error: null,
											current: s,
											pendingUpdate: c,
										}
									));
							} else e.byUrl[o] = Object(V.a)(Object(V.a)({}, e.byUrl[o]), {}, { loadingRequestId: null, error: null, current: c, pendingUpdate: null });
						})
						.addCase(Xe.rejected, function (e, n) {
							var t,
								r = n.payload,
								a = r.url,
								i = r.requestId,
								c = r.errorMessage;
							(null === (t = e.byUrl[a]) || void 0 === t
								? void 0
								: t.loadingRequestId) === i &&
								(e.byUrl[a] = Object(V.a)(
									Object(V.a)({}, e.byUrl[a]),
									{},
									{
										loadingRequestId: null,
										error: c,
										current: null,
										pendingUpdate: null,
									}
								));
						})
						.addCase(nn, function (e, n) {
							var t = n.payload;
							(e.selectedListUrl = t), e.byUrl[t] || (e.byUrl[t] = gp);
						})
						.addCase($e, function (e, n) {
							var t = n.payload;
							e.byUrl[t] || (e.byUrl[t] = gp);
						})
						.addCase(en, function (e, n) {
							var t = n.payload;
							e.byUrl[t] && delete e.byUrl[t],
								e.selectedListUrl === t &&
									(e.selectedListUrl = Object.keys(e.byUrl)[0]);
						})
						.addCase(Ze, function (e, n) {
							var t,
								r = n.payload;
							if (
								!(null === (t = e.byUrl[r]) || void 0 === t
									? void 0
									: t.pendingUpdate)
							)
								throw new Error(
									"accept list update called without pending update"
								);
							e.byUrl[r] = Object(V.a)(
								Object(V.a)({}, e.byUrl[r]),
								{},
								{ pendingUpdate: null, current: e.byUrl[r].pendingUpdate }
							);
						})
						.addCase(lp, function (e) {
							if (e.lastInitializedDefaultListOfLists) {
								if (e.lastInitializedDefaultListOfLists) {
									var n = e.lastInitializedDefaultListOfLists.reduce(function (
											e,
											n
										) {
											return e.add(n);
										},
										new Set()),
										t = Xc.reduce(function (e, n) {
											return e.add(n);
										}, new Set());
									Xc.forEach(function (t) {
										n.has(t) || (e.byUrl[t] = gp);
									}),
										e.lastInitializedDefaultListOfLists.forEach(function (n) {
											t.has(n) || delete e.byUrl[n];
										});
								}
							} else (e.byUrl = wp.byUrl), (e.selectedListUrl = void 0);
							e.lastInitializedDefaultListOfLists = Xc;
						});
				}),
				kp = { independentField: md.LIQUIDITY_PERCENT, typedValue: "0" },
				Tp = Object(Re.c)(kp, function (e) {
					return e.addCase(vd, function (e, n) {
						var t = n.payload,
							r = t.field,
							a = t.typedValue;
						return Object(V.a)(
							Object(V.a)({}, e),
							{},
							{ independentField: r, typedValue: a }
						);
					});
				}),
				Ip = Object(Re.c)({ callResults: {} }, function (e) {
					return e
						.addCase(na, function (e, n) {
							var t,
								r = n.payload,
								a = r.calls,
								i = r.chainId,
								c = r.options,
								o = (c = void 0 === c ? {} : c).blocksPerFetch,
								s = void 0 === o ? 1 : o,
								u = e.callListeners ? e.callListeners : (e.callListeners = {});
							(u[i] = null !== (t = u[i]) && void 0 !== t ? t : {}),
								a.forEach(function (e) {
									var n,
										t,
										r = $r(e);
									(u[i][r] = null !== (n = u[i][r]) && void 0 !== n ? n : {}),
										(u[i][r][s] =
											(null !== (t = u[i][r][s]) && void 0 !== t ? t : 0) + 1);
								});
						})
						.addCase(ta, function (e, n) {
							var t = n.payload,
								r = t.chainId,
								a = t.calls,
								i = t.options,
								c = (i = void 0 === i ? {} : i).blocksPerFetch,
								o = void 0 === c ? 1 : c,
								s = e.callListeners ? e.callListeners : (e.callListeners = {});
							s[r] &&
								a.forEach(function (e) {
									var n = $r(e);
									s[r][n] &&
										s[r][n][o] &&
										(1 === s[r][n][o] ? delete s[r][n][o] : s[r][n][o]--);
								});
						})
						.addCase(ra, function (e, n) {
							var t,
								r = n.payload,
								a = r.chainId,
								i = r.fetchingBlockNumber,
								c = r.calls;
							(e.callResults[a] =
								null !== (t = e.callResults[a]) && void 0 !== t ? t : {}),
								c.forEach(function (n) {
									var t = $r(n),
										r = e.callResults[a][t];
									if (r) {
										var c;
										if (
											(null !== (c = r.fetchingBlockNumber) && void 0 !== c
												? c
												: 0) >= i
										)
											return;
										e.callResults[a][t].fetchingBlockNumber = i;
									} else e.callResults[a][t] = { fetchingBlockNumber: i };
								});
						})
						.addCase(aa, function (e, n) {
							var t,
								r = n.payload,
								a = r.fetchingBlockNumber,
								i = r.chainId,
								c = r.calls;
							(e.callResults[i] =
								null !== (t = e.callResults[i]) && void 0 !== t ? t : {}),
								c.forEach(function (n) {
									var t = $r(n),
										r = e.callResults[i][t];
									r &&
										r.fetchingBlockNumber === a &&
										(delete r.fetchingBlockNumber,
										(r.data = null),
										(r.blockNumber = a));
								});
						})
						.addCase(ia, function (e, n) {
							var t,
								r = n.payload,
								a = r.chainId,
								i = r.results,
								c = r.blockNumber;
							(e.callResults[a] =
								null !== (t = e.callResults[a]) && void 0 !== t ? t : {}),
								Object.keys(i).forEach(function (n) {
									var t,
										r = e.callResults[a][n];
									(null !==
										(t = null === r || void 0 === r ? void 0 : r.blockNumber) &&
									void 0 !== t
										? t
										: 0) > c ||
										(e.callResults[a][n] = { data: i[n], blockNumber: c });
								});
						});
				}),
				Ep = ["user", "transactions"],
				Np = Object(sp.load)({ states: Ep });
			Np.user &&
				(Np.user.userDarkMode = (function () {
					var e = null;
					try {
						null !== (e = localStorage.getItem(Aa)) && (e = JSON.parse(e));
					} catch (n) {}
					return e;
				})());
			var Ap = Object(Re.a)({
				reducer: {
					application: up,
					user: jp,
					transactions: hp,
					swap: vp,
					mint: xp,
					burn: Tp,
					multicall: Ip,
					lists: Cp,
				},
				middleware: [].concat(Object(oe.a)(Object(Re.d)({ thunk: !1 })), [
					Object(sp.save)({ states: Ep }),
				]),
				preloadedState: Np,
			});
			Ap.dispatch(lp());
			var Sp = Ap;
			function Rp(e) {
				var n = new C.a(e);
				return (n.pollingInterval = 15e3), n;
			}
			var Up = Object(x.b)(ve),
				Bp = function (e) {
					var n = e.children;
					return Object(r.jsx)(x.a, {
						getLibrary: Rp,
						children: Object(r.jsx)(Up, {
							getLibrary: Rp,
							children: Object(r.jsx)(De.a, {
								store: Sp,
								children: Object(r.jsx)(Lb, {
									children: Object(r.jsx)(s.s, { children: n }),
								}),
							}),
						}),
					});
				},
				Pp = (t(461), t(182)),
				_p = t(278),
				Mp = t.n(_p),
				Dp = t(279),
				Lp = t.n(Dp);
			Pp.a
				.use(Mp.a)
				.use(Lp.a)
				.use(Tt.a)
				.init({
					backend: { loadPath: "./locales/{{lng}}.json" },
					react: { useSuspense: !0 },
					fallbackLng: "en",
					preload: ["en"],
					keySeparator: !1,
					interpolation: { escapeValue: !1 },
				});
			Pp.a;
			"ethereum" in window && (window.ethereum.autoRefreshOnNetworkChange = !1),
				window.addEventListener("error", function () {
					localStorage &&
						localStorage.removeItem("redux_localstorage_simple_lists");
				}),
				o.a.render(
					Object(r.jsx)(a.StrictMode, {
						children: Object(r.jsxs)(Bp, {
							children: [
								Object(r.jsxs)(r.Fragment, {
									children: [
										Object(r.jsx)(np, {}),
										Object(r.jsx)(ep, {}),
										Object(r.jsx)(op, {}),
										Object(r.jsx)(cp, {}),
									],
								}),
								Object(r.jsx)(s.t, {}),
								Object(r.jsx)(p, {}),
								Object(r.jsx)(Jb, {}),
							],
						}),
					}),
					document.getElementById("root")
				);
		},
	},
	[[478, 3, 4]],
]);
//# sourceMappingURL=main.6e368bf5.chunk.js.map
