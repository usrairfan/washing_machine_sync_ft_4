function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadClothes() {
  console.log("Step 1: Clothes loaded into the washing machine.");
  await wait(2000);
}

async function addDetergent() {
  console.log("Step 2: Detergent added.");
  await wait(2000);
}

async function selectWashMode(mode: string) {
  console.log(`Step 3: Wash mode selected - ${mode}.`);
  await wait(2000);
}

async function fillWater() {
  console.log("Step 4: Water filled.");
  await wait(2000);
}

async function washCycle() {
  console.log("Step 5: Washing clothes...");
  await wait(2000);
}

async function drainWater() {
  console.log("Step 6: Draining dirty water.");
  await wait(2000);
}

async function rinseClothes() {
  console.log("Step 7: Rinsing with clean water.");
  await wait(2000);
}

async function spinDry() {
  console.log("Step 8: Spinning and drying.");
  await wait(2000);
}

async function complete() {
  console.log("Step 9: Washing complete. Please remove your clothes.");
}

// 🔁 Full Process in Sync with Delay
async function runWashingMachine(mode: string) {
  console.log("🚿 Washing Machine Starting...\n");

  await loadClothes();
  await addDetergent();
  await selectWashMode(mode);
  await fillWater();
  await washCycle();
  await drainWater();
  await rinseClothes();
  await spinDry();
  await complete();

  console.log("\n✅ Process Finished.");
}

// ✅ Call Function
runWashingMachine("Normal");
