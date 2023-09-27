const spinners = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
let timeDelay = 100;

for (const spins of spinners) {
  setTimeout(() => {
    process.stdout.write(`\r${spins}  `);
    }, timeDelay += 200);
};

