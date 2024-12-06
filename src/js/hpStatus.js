export default function hpStatus(player) {
  if (player.health === 100) {
    return 'healthy';
  } if (player.health >= 50) {
    return 'wounded';
  }
  return 'critical';
}
