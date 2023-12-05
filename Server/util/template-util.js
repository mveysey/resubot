const pool = require('../database/Database'); // Import your database connection

// Retrieve all templates from the database
const getAllTemplates = async () => {
    const sql = 'SELECT * FROM template';
    try {
        const [rows, fields] = await pool.query(sql);
        return rows;
    } catch (error) {
        throw error;
    }
};

// Create a new template in the database
const createTemplate = async ({ template_name, template_category, template_content, template_preview }) => {
    const sql = 'INSERT INTO template (template_name, template_category, template_content, template_preview) VALUES (?, ?, ?, ?)';
    try {
        const [rows, fields] = await pool.query(sql, [template_name, template_category, template_content, template_preview]);
        return rows.insertId; // Return the ID of the newly created template
    } catch (error) {
        throw error;
    }
};

// Retrieve a template by ID from the database
const getTemplateById = async (id) => {
    // Ensure id is an integer
    console.log(id)
    const sql = 'SELECT * FROM template WHERE template_id = ?';
    try {
        const [rows, fields] = await pool.query(sql, [id]);

        if (rows.length === 0) {
            return null; // Template not found
        }

        return rows[0];
    } catch (error) {
        throw error;
    }
};


// Update a template by ID in the database
const updateTemplateById = async (id) => {
    const sql = 'UPDATE template SET template_name = ?, template_category = ?, template_content = ?, template_preview = ? WHERE template_id = ?';
    try {
        const [rows, fields] = await pool.query(sql, [template_name, template_category, template_content, template_preview, id]);

        if (rows.affectedRows === 0) {
            return null; // Template not found
        }

        return getTemplateById(id); // Return the updated template
    } catch (error) {
        throw error;
    }
};

// Delete a template by ID from the database
const deleteTemplateById = async (id) => {
    const sql = 'DELETE FROM template WHERE template_id = ?';
    try {
        const [rows, fields] = await pool.query(sql, [id]);

        if (rows.affectedRows === 0) {
            return null; // Template not found
        }

        return true; // Return true to indicate successful deletion
    } catch (error) {
        throw error;
    }
};

module.exports = { getAllTemplates, createTemplate, getTemplateById, updateTemplateById, deleteTemplateById };
