import React from 'react';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full space-y-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {/* Accordion Item 1 */}
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold">How can I add a query about a product?</div>
            <div className="collapse-content text-sm">
              To add a query, simply navigate to the product page and click on the "Add Query" button. You can enter your question about the product, and it will be submitted to the system for review. Once your query is approved, it will be visible to other users.
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">Can I update or delete my query?</div>
            <div className="collapse-content text-sm">
              Yes, you can update or delete your query. To update, simply go to your query and click "Edit." After making changes, save them. If you wish to delete your query, there will be a "Delete" option available next to your query.
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">How can I view other queries for alternative products?</div>
            <div className="collapse-content text-sm">
              To view queries for alternative products, visit the product’s page and scroll down to the "User Queries" section. Here, you will see questions from other users about similar products. You can also filter queries based on product categories.
            </div>
          </div>

          {/* Accordion Item 4 */}
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">Can I add my recommendations for products?</div>
            <div className="collapse-content text-sm">
              Yes! After reviewing a product, you can provide your recommendation by clicking the "Add Recommendation" button. You can suggest alternative products or highlight features you liked. Recommendations will help guide other users.
            </div>
          </div>

          {/* Accordion Item 5 */}
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">Can I delete my recommendations?</div>
            <div className="collapse-content text-sm">
              Yes, you can delete your recommendations. Simply go to your posted recommendation and click the "Delete" button to remove it from the platform.
            </div>
          </div>

          {/* Accordion Item 6 */}
          <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">How can I modify or delete my comments?</div>
            <div className="collapse-content text-sm">
              If you want to modify or delete a comment, navigate to the comment section where your comment is posted. You will find an "Edit" option to modify your comment, or a "Delete" option to remove it entirely.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
