const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Contactez-nous</h1>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Nom complet</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: Jean Dupont"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="jean@exemple.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows={5}
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Comment pouvons-nous vous aider ?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-bold py-3 rounded hover:bg-gray-900 transition-colors"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;