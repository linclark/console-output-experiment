// Meant for processing a dump generated by RDP Inspector
var fs = require('fs');
var contents = fs.readFileSync('console-api-packets.json').toString();

var packets = JSON.parse(contents).packets;

packets = packets.filter(function(packet) {
  if (packet.stack) packet.stack = undefined;
  return packet.type == "receive" &&
         packet.packet.type == "consoleAPICall";
});

fs.writeFileSync('console-api-packets-filtered.json', JSON.stringify(packets, null, 2));
