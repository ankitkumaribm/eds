export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('team-member');
    const name = row.children[0];
    if (name) name.classList.add('team-member-name');
    const title = row.children[1];
    if (title) title.classList.add('team-member-title');
  });
}
