<script>
  export let subject;
  export let inputs;

  const handleSubmit = () => {
    if (!subject) {
      return;
    }
    inputs = [
      ...inputs,
      {
        subject,
        score: 100,
        id: Date.now().toString(36) + Math.random().toString(36),
      },
    ];
    subject = '';
  };
</script>

<form
  class="w-full flex justify-center items-center my-8"
  on:submit|preventDefault={handleSubmit}
>
  <input
    type="text"
    bind:value={subject}
    placeholder="Add new Subject you want"
    class="w-full px-2 py-1 outline-none border border-slate-600 rounded text-black dark:text-white dark:bg-zinc-600"
  />
  <button class="font-semibold ml-2 border border-gray-300 px-3 py-1 rounded"
    >Add</button
  >
</form>
