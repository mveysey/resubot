const {getAllTemplates, getTemplateById, updateTemplateById, deleteTemplateById, createTemplate} = require("../util/template-util");
const templateController = {
    // Create a new template
    createTemplate: async (req, res) => {
        try {
            const { template_name, template_category, template_content, template_preview } = req.body;

            // Create a new template record in the database
            const template = await createTemplate({
                template_name,
                template_category,
                template_content,
                template_preview,
            });

            return res.status(201).json({ template });
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Get all templates
    getAllTemplates: async (req, res) => {
        try {
            const templates = await getAllTemplates();
            return res.status(200).json({ templates });
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Get a template by ID
    getTemplateById: async (req, res) => {
        try {
            const id = req.params.id; // Corrected to access the 'id' parameter
            console.log(id);
            const template = await getTemplateById(id);
            if (!template) {
                return res.status(404).json({ error: 'Template not found' });
            }
            return res.status(200).json({ template });
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Update a template by ID
    updateTemplateById: async (req, res) => {
        try {
            const { id } = req.params;
            const { template_name, template_category, template_content, template_preview } = req.body;

            // Find the template by ID and update its properties
            const template = await updateTemplateById(id);

            if (!template) {
                return res.status(404).json({ error: 'Template not found' });
            }

            template.template_name = template_name;
            template.template_category = template_category;
            template.template_content = template_content;
            template.template_preview = template_preview;

            // Save the updated template to the database
            await template.save();

            return res.status(200).json({ template });
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    },

    // Delete a template by ID
    deleteTemplateById: async (req, res) => {
        try {
            const { id } = req.params;
            // Find the template by ID and delete it
            const template = await deleteTemplateById(id);
            if (!template) {
                return res.status(404).json({ error: 'Template not found' });
            }
            await template.destroy();
            return res.status(204).end(); // Respond with no content for successful deletion
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    },
}

module.exports = templateController